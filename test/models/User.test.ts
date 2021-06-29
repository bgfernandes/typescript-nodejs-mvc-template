import { Model } from 'objection';
import dbInitializer from '../../src/config/initializers/dbInitializer';
import User from '../../src/models/User';
import * as factories from '../factories';

beforeAll(async () => {
  dbInitializer();
});

afterAll(async () => {
  await Model.knex().destroy();
});

describe('findOrCreateByIdentity', () => {
  it('creates a user when none is found', async () => {
    const user = await User.findOrCreateByIdentity('some_provider', 'some_provider_id');

    expect(user).toBeInstanceOf(User);
    expect(user.identities).toBeTruthy();
    if (user.identities) {
      expect(user.identities[0]).toMatchObject({
        provider: 'some_provider',
        provider_id: 'some_provider_id'
      });
    }
  });

  it('finds the correct user when they exist', async () => {
    const user1 = await factories.user.create();
    await factories.userIdentity.create({ user_id: user1.id});

    const user2 = await factories.user.create();
    await factories.userIdentity.create({ provider: 'provider x', provider_id: 'provider id x', user_id: user2.id });

    const foundUser = await User.findOrCreateByIdentity('provider x', 'provider id x');
    expect(foundUser).toBeInstanceOf(User);
    expect(foundUser.id).toEqual(user2.id);
  });
});
