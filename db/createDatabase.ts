/*
Script to create the database
*/

import knex from 'knex';
import config from './../src/config/config';


const knexInstance = knex({
  client: 'pg',
  connection: {
    host : config.db_host,
    user : config.db_user,
    password : config.db_pass
  }
});

knexInstance.raw(`CREATE DATABASE ${config.db_database};`)
  .then(() => {
    console.log(`Created Database ${config.db_database}`);
  })
  .catch((err) => {
    console.error(`Error creating database ${config.db_database}`);
    console.error(err);
  })
  .finally(() => {
    knexInstance.destroy();
  });
