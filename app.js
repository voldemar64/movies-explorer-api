require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errors');
const routes = require('./routes/index');
const DB_ADDRES = require('./utils/dbConstants');
const cors = require('./middlewares/cors');

const { PORT = 3000, NODE_ENV, DB_URL } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

app.use(helmet());
app.use(requestLogger);

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

mongoose.connect(NODE_ENV === 'production' ? DB_URL : DB_ADDRES, () => {
  console.log('База данных подключена');
});

app.listen(PORT, () => {
  console.log(`Порт: ${PORT}`);
});
