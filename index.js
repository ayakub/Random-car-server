const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());


// middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@sickcluster.nqy80.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const catagoriesCollection = client.db('reusedCar').collection('catagories');
        app.post('/catagory', async (req, res) => {
            const catagory = req.body;
            const result = await catagoriesCollection.insertOne(catagory);
            res.send(result)
        })
    }
    finally {

    }
}
run().catch(console.log)


app.get('/', async (req, res) => {
    res.send('server is runnning')
})
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})