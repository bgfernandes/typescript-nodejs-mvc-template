import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('users', function (table) {
      table.bigIncrements('id');
      table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('users');
}
