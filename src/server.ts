import express from 'express';

const app = express();

app.use(express.json);

app.get('/', (request, response) => {
  return response.json('opa')
})

app.listen(3333, () => {
  console.log('A aplicacao esta rodando em localhost:3333');
});