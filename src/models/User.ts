import { JSONSchema7 } from 'json-schema';
import BaseModel from './BaseModel';

export default class User extends BaseModel {
  id: string | undefined;

  static get tableName():string {
    return 'users';
  }

  static get jsonSchema():JSONSchema7 {
    return {
      type: 'object',

      properties: {
        id: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }
}
