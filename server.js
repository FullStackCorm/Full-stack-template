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
        console.log(`Cats: All your base are belong to us. You are on the way to destruction.`)
        db = client.db(dbName)
        collection = db.collection('quotes')
    })


    // MIDDLEWARE //

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


    // PORT = 8000 //
app.listen(process.env.PORT || PORT, () => {
    console.log(`Captain: It's you on port ${process.env.PORT}!`)
})