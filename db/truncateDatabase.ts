/*
Function to truncate all tables in the database
*/

import knex from 'knex';
import config from './../src/config/config';

if (require.main === module) {
  truncateTables();
}

export default async function truncateTables():Promise<void> {
  const knexInstance = knex({
    client: 'pg',
    connection: {
      host : config.db_host,
      user : config.db_user,
      password : config.db_pass,
      database: config.db_database
    }
  });

  return knexInstance.raw(
    `
      DO
      $func$
      BEGIN
        EXECUTE
        (
          SELECT 'TRUNCATE TABLE ' || string_agg(format('%I.%I', table_schema, table_name), ', ') || ' RESTART IDENTITY CASCADE'
          FROM information_schema.tables
          WHERE table_schema = 'public'
          AND table_type = 'BASE TABLE'
        );
      END
      $func$;
    `
  ).finally(() => {
    knexInstance.destroy();
  });
}
