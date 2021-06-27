/*
  This is going to run once before all tests.
  It will try to drop the database, if it exists, and create a fresh database for running the tests.
  After that, it will run all the migrations.
*/

import { exec } from 'child_process';
import { promisify } from 'util';
import createDatabase from '../db/createDatabase';
import dropDatabase from '../db/dropDatabase';

export default async function ():Promise<void> {
  await dropDatabase();
  await createDatabase();

  const execPromise = promisify(exec);

  console.log((await execPromise('knex migrate:latest')).stdout);
}
