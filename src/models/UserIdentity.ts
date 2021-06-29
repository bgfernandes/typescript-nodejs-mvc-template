import { JSONSchema7 } from 'json-schema';
import BaseModel from './BaseModel';

export default class UserIdentity extends BaseModel {
  provider: string | undefined;
  provider_id: string | undefined;
  user_id: string | undefined;

  static get tableName():string {
    return 'user_identities';
  }

  static relationMappings = {
    user: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: 'User',
      join: {
        from: 'user_identities.user_id',
        to: 'users.id'
      }
    }
  }

  static get jsonSchema():JSONSchema7 {
    return {
      type: 'object',
      required: ['provider', 'provider_id'],

      properties: {
        id: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
        provider: { type: 'string' },
        provider_id: { type: 'string' }
      }
    };
  }
}
