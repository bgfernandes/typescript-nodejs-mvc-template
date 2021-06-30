import { Factory } from 'fishery';
import moment from 'moment';
import UserIdentity from '../src/models/UserIdentity';
import User from './../src/models/User';

export const user = Factory.define<User>(({ sequence, onCreate }) => {
  onCreate((user) => {
    return user.$query().insert();
  });

  return User.fromJson({
    id: sequence.toString(),
    created_at: moment('2021-06-27T00:00:00Z').toISOString(),
    updated_at: moment('2021-06-27T00:00:00Z').toISOString()
  });
});

export const userIdentity = Factory.define<UserIdentity>(({ sequence, onCreate }) => {
  onCreate((userIdentity) => {
    return userIdentity.$query().insert();
  });

  return UserIdentity.fromJson({
    id: sequence.toString(),
    created_at: moment('2021-06-29T00:00:00Z').toISOString(),
    updated_at: moment('2021-06-29T00:00:00Z').toISOString(),
    provider: 'some_provider',
    provider_id: 'some_provider_id',
    user_id: 123
  });
});
