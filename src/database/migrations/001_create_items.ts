import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary();
    table.string('image_icon_path').notNullable();
    table.string('name').notNullable();
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('items');
}
