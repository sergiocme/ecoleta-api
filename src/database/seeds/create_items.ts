import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { name: 'Pilhas e Baterias', image_icon_path: 'battery.svg' },
    { name: 'Resíduos Eletrônicos', image_icon_path: 'hardware.svg' },
    { name: 'Lâmpadas', image_icon_path: 'light_bulb.svg' },
    { name: 'Óleo de Cozinha', image_icon_path: 'oil.svg' },
    { name: 'Resíduos Orgânicos', image_icon_path: 'organic.svg' },
    { name: 'Papeís e Papelão', image_icon_path: 'paper.svg' },
  ]);
}
