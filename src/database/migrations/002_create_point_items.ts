import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('point_items', (table) => {
    table.increments('id').primary();

    table
      .uuid('point_id')
      .notNullable()
      .references('id')
      .inTable('points');

    table
      .integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('point_items');
}
