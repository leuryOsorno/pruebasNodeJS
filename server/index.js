const usersRoute = require('../routes/users')
const express = require('express');

const apiRouter = (app)=>{
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/users',usersRoute);
}


module.exports = apiRouter;
