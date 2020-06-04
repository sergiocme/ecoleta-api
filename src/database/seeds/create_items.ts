import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { name: 'battery', image_icon_path: 'battery.svg' },
    { name: 'hardware', image_icon_path: 'hardware.svg' },
    { name: 'light bulb', image_icon_path: 'light_bulb.svg' },
    { name: 'oil', image_icon_path: 'oil.svg' },
    { name: 'organic', image_icon_path: 'organic.svg' },
    { name: 'paper', image_icon_path: 'paper.svg' },
  ]);
}
