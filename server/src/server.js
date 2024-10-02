import express from 'express';
import config from './config.js';
import { userRouter } from './user/index.js';
import { petRouter } from './pet/index.js';
import db from './lib/db.js';
import cors from 'cors';

const app = express();
app.use(cors());

const port = config?.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/user', userRouter);
app.use('/pet', petRouter);

app.listen(port, () => {
  db();
  console.log(`Server has started at http://localhost:${port}`);
});
