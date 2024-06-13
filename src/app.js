import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const serverPort = process.env.port;

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  res.json({message: 'Server is Running.'})
});

app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});