const userRoute = require('../routes/user')
const express = require('express');

const apiRouter = (app)=>{
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/user',userRoute);
}


module.exports = apiRouter;
