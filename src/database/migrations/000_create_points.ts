import Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('points', (table) => {
    table.uuid('id').primary();
    table.string('facade_photo_path');
    table.string('name').notNullable();
    table.string('email').unique().notNullable();
    table.string('whatsapp').unique().notNullable();
    table.string('geolocation').unique().notNullable();
    table.string('postal_address').notNullable();
    table.string('city').notNullable();
    table.string('federal_state', 2).notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('points');
}
