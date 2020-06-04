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

  const {
    name,
    email,
    whatsapp,
    geolocation,
    postal_address,
    city,
    federal_state,
    items,
  } = request.body;

  try {
    await knex('points').insert({
      id: uuid(),
      name,
      email,
      whatsapp,
      geolocation,
      postal_address,
      city,
      federal_state,
    });

    return response.send();
  } catch (error) {
    console.log('error: ', error);
  }
});

export default router;
