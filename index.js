const express = require('express');
const apiRouter = require('./server');
const app = express();
const morgan = require('morgan');
require('dotenv').config.config();
const port = 3000;


const PORT = process.env.PORT || port;

app.use(morgan('start'));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))


apiRouter(app);

app.listen(port, () => console.log(`Example app listening on port ${PORT}!`))
