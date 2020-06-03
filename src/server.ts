import express from 'express';

const app = express();

app.get('/users', (resquest, response) => {
  
  response.json([
    'Sérgio',
    'Gabriel',
    'Pedro'
  ]);
});

app.listen(3333);
