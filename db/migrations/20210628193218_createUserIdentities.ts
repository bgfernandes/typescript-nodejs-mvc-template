import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
  return knex.schema
  .createTable('user_identities', function (table) {
    table.bigIncrements('id');
    table.timestamps(true, true);
    table.string('provider', 255).notNullable();
    table.string('provider_id', 255).notNullable();
    table.bigInteger('user_id').unsigned().notNullable();

    table.foreign('user_id').references('id').inTable('users');
    table.unique(['provider', 'provider_id']);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('user_identities');
}

