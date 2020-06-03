import express from 'express';

const app = express();

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

app.get('/users', (request, response) => {
  const name = request.query.name ? String(request.query.name).toLowerCase() : request.query.name;

  const searchedUsers = (name && name.length) ? users.filter((user) => {
    const caseInsensitiveName = user.name.toLowerCase();
    
    return (caseInsensitiveName.includes(name));
  }) : users;

  return response.json(searchedUsers);
});

app.get('/users:id', (request, response) => {
  const id = Number(request.params.id);

  return response.json(users[id]);
});

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego Fernandes',
    email: 'diegofernandes@rocketseat.com.br',
  }

  users.push(user);
  return response.send();
});

app.listen(3333);
