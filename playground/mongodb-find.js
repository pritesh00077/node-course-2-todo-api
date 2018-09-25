// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  db.collection("Users").find({
    _id : new ObjectID('5baaa69e16f24221b8b3922b')
  }).toArray().then(function(docs){
      console.log('Users');
      console.log(JSON.stringify(docs,undefined,2));
  }, function(err){
      console.log('Unable to fetch ' +err);
  });

  // db.collection("Users").find().count().then(function(count){
  //     console.log('Users count: ' +count);
  // }, function(err){
  //     console.log('Unable to fetch ' +err);
  // });

  client.close();
});
