import { JSONSchema7 } from 'json-schema';
import BaseModel from './BaseModel';

export default class Users extends BaseModel {
  id: number | undefined;
  created_at: string | undefined;
  updated_at: string | undefined;

  static get tableName():string {
    return 'users';
  }

  static get jsonSchema():JSONSchema7 {
    return {
      type: 'object',

      properties: {
        id: { type: 'integer' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }
}
