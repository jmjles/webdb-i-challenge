const express = require('express');

const db = require('./data/dbConfig.js');
db('accounts')
const server = express();

server.use(express.json());
server.use("/api", async (req, res) => res.json( await db("accounts")));
module.exports = server;