import moment from 'moment';
import { Model } from 'objection';

export default class BaseModel extends Model {
  created_at: string | moment.Moment | undefined
  updated_at: string | moment.Moment | undefined;

  $beforeUpdate():void {
    this.updated_at = moment().toISOString();
  }

  $afterFind():void {
    this.created_at = moment(this.created_at).utc();
    this.updated_at = moment(this.updated_at).utc();
  }
}
