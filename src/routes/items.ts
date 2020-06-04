import { Router } from 'express';
import knex from '../database/connection';

const router = Router();

router.get('/items', async (request, response) => {
  const items = await knex('items').select('*');

  const serializedItems = items.map((item) => {
    const serializedItem = {
      id: item.id,
      name: item.name,
      image_icon_url: `http://localhost:3333/assets/${item.image_icon_path}`,
    };

    return serializedItem;
  });

  return response.json(serializedItems);
});

export default router;
