/*
Script to drop the database
*/

import knex from 'knex';
import config from './../src/config/config';

if (require.main === module) {
  dropDatabase();
}

export default function dropDatabase():Promise<void> {
  const knexInstance = knex({
    client: 'pg',
    connection: {
      host : config.db_host,
      user : config.db_user,
      password : config.db_pass
    }
  });

  return knexInstance.raw(`DROP DATABASE ${config.db_database};`)
    .then(() => {
      console.log(`Dropped Database ${config.db_database}`);
    })
    .catch((err) => {
      if (err.message.match(/^DROP DATABASE .*; - database ".*" does not exist$/)) {
        console.log(`Database ${config.db_database} doesn't exist.`);
      } else {
        console.error(`Error dropping database ${config.db_database}`);
        console.error(err);
      }
    })
    .finally(() => {
      knexInstance.destroy();
    });
}


