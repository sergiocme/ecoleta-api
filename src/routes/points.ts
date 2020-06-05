import { Router } from 'express';
import { uuid } from 'uuidv4';

import knex from '../database/connection';

const router = Router();

router.post('/points', async (request, response) => {
  // uuid as id
  // facade_photo null
  // name
  // email
  // whatsapp
  // geolocation
  // postal_address
  // city
  // federal_state
  // items relation

  const point = {
    id: uuid(),
    name: request.body.name,
    email: request.body.email,
    whatsapp: request.body.whatsapp,
    geolocation: request.body.geolocation,
    postal_address: request.body.postal_address,
    city: request.body.city,
    federal_state: request.body.federal_state,
  };

  const items = request.body.items.filter((item: number, index: number) => {
    return request.body.items.indexOf(item) === index;
  });

  const foundItems = await knex('items').select('*').whereIn('id', items);

  if (items.length > foundItems.length) return response.status(400).json({ message: 'Invalid items' });

  const insertPointItemsData = items.map((item_id: number) => {
    return {
      point_id: point.id,
      item_id: item_id,
    };
  });

  try {
    await knex.transaction(async (context) => {
      await context('points').insert(point);

      await context('point_items').insert(insertPointItemsData);

      await context.commit();
    });

    return response.json({ ...point, items });
  } catch (error) {
    console.error('database error: ', error);
    return response.status(500).json({ error: 'Unable to create point'});
  }
});

router.get('/points/:id', async (request, response) => {
  const { id } = request.params;

  const point = await knex('points')
    .where({ id })
    .select('*')
    .first();

  const items = await knex('point_items')
    .join('items', 'point_items.item_id', '=', 'items.id')
    .where('point_items.point_id', id)
    .select('items.*');

  return response.json({ ...point, items });
});

export default router;
