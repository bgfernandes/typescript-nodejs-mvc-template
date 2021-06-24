import { Model } from 'objection';
import knex from 'knex';
import config from './../config';

export default function ():void {
  const knexInstance = knex({
    client: 'pg',
    connection: {
      host : config.db_host,
      user : config.db_user,
      password : config.db_pass,
      database : config.db_database
    }
  });

  Model.knex(knexInstance);
}
