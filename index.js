const express = require('express');
const apiRouter = require('./server');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const port = 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Main route
app.get('/', (req, res) => res.send('Hello World!'))



// this redirect to routes creted
apiRouter(app);
const PORT = process.env.PORT || port;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})

