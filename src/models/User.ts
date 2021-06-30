import { JSONSchema7 } from 'json-schema';
import BaseModel from './BaseModel';
import UserIdentity from './UserIdentity';

export default class User extends BaseModel {
  id: string | undefined;
  identities: UserIdentity[] | undefined;

  static get tableName():string {
    return 'users';
  }

  static relationMappings = {
    identities: {
      relation: BaseModel.HasManyRelation,
      modelClass: 'UserIdentity',
      join: {
        from: 'users.id',
        to: 'user_identities.user_id'
      }
    }
  };

  static get jsonSchema():JSONSchema7 {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
        identities: { type: 'array' }
      }
    };
  }

  /*
    Finds or creates a user based on the Identity information received on authentication
  */
  static async findOrCreateByIdentity(provider: string, provider_id: string): Promise<User> {
    const foundUser =
      await User.query()
                .withGraphJoined('identities')
                .where('identities.provider', provider)
                .andWhere('identities.provider_id', provider_id)
                .first();

    if (foundUser) {
      return foundUser;
    }

    const newUser = await User.transaction(async (trx) => {
      return await User.query(trx).insertGraph({
        identities: [{
          provider,
          provider_id
        }]
      }).returning('*');
    });

    return newUser;
  }
}
