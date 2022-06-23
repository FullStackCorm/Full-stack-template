// Require dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Require middleware //

// Declare variables //
let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = 'star-wars-quotes',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`All your base are belong to us. You are on the way to destruction.`)
        db = client.db(dbName)
        collection = db.collection('quotes')
    })