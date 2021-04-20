import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'OLÁ NLW 05 - GET' });
});

app.post('/', (req, res) => {
  return res.json({ message: 'OLÁ NLW 05 - POST' });
});

app.listen(3333, () => console.log('Server started on 3333'));