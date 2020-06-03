import { Router } from 'express';

const router = Router();

const users = [
  {
    name: 'Sérgio Carvalho',
    email: 'sergiocarvalho.m@outlook.com',
  },
  {
    name: 'Isabela Carvalho',
    email: 'isabela.carvalho@batata.com',
  },
  {
    name: 'Rodrigo Maia',
    email: 'rodrigo.maia@batata.com',
  },
];

router.get('/users', (request, response) => {
  const name = request.query.name ? String(request.query.name).toLowerCase() : request.query.name;
  
  const searchedUsers = (name && name.length) ? users.filter((user) => {
    const caseInsensitiveName = user.name.toLowerCase();
    
    return (caseInsensitiveName.includes(name));
  }) : users;
  
  return response.json(searchedUsers);
});

router.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  
  return response.json(users[id]);
});

router.post('/users', (request, response) => {
  const { name, email } = request.body;
  
  const user = { name, email };
  
  users.push(user);
  return response.json(user);
});

export default router;
