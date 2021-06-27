/*
  This file adds a beforeEach to run before every test case.
  This will truncate every table in the database to make sure every test case has a clean DB.

  Decided to go with this approach, initially I tried doing active_record/ecto style by running every test inside
  it's own transaction, but it is not as easy as I expected.

  Also, to make sure that no test case will contaminate the DB to another test case, they need to run sequentially,
  with running jest in --runInBand mode.

  This is not ideal because it will add some overhead to the tests, but works.
*/

import truncateTables from '../db/truncateDatabase';

global.beforeEach(async () => {
  await truncateTables();
});
