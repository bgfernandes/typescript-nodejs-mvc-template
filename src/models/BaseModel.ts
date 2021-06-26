import { Model } from 'objection';

export default class BaseModel extends Model {
  updated_at: string | undefined;

  $beforeUpdate():void {
    this.updated_at = new Date().toISOString();
  }
}
