const Pool = require('pg').Pool
require('dotenv').config();

const USER = process.env.USER;
const HOST = process.env.HOST;
const DB = process.env.DB;
const PWD = process.env.PASSWORD;
const DBPORT = process.env.DBPORT; 

const cnn = new Pool({
  user: USER,
  host: HOST,
  database: DB,
  password: PWD,
  port: DBPORT,
})