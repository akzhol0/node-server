import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 8800;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'test',
});

app.get('/', (req, res) => {
  res.json('Response from backend');
});

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM info';

  db.query(query, (err, data) => {
    if (err) return res.json('Error happened ' + err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log('Connected to the port: ' + PORT);
});
