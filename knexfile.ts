import config from './src/config/config';

export default {
  client: 'postgresql',
  connection: {
    host : config.db_host,
    user : config.db_user,
    password : config.db_pass,
    database : config.db_database
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    extension: 'ts',
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
};
