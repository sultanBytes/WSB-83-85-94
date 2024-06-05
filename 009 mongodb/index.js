const express = require('express');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const database = async()=>{
    await client.connect();
    const db = await client.db('test_database_tmp');

    // const adminCollection =await db.collection('admins');

    return db;
}

const insertData = async()=>{
   const db = await database();

   const adminCollection =await db.collection('admins');

   const response = await adminCollection.insertOne({
    name:'user',
    password:'1234@admin'
   });

   console.log(response);
};

// insertData();

const readData = async()=>{
    try{
        const db = await database();
    const collection = await db.collection('admins');

    const response = await collection.find().toArray();
    console.log(response);
    }
    catch(err)
    {
        console.log(err);
    }
};


readData();


const app = express();
app.use(express.json());

app.listen(5000, ()=>{
    console.log('server is running on port 5000');
})