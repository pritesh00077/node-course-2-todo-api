// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  //delete many

  // db.collection ('Users').deleteMany({Name: "Radhika Patel"}).then((res) =>{
  //   console.log(res.result);
  // });

  //delete one

  // db.collection ('Users').deleteOne({Name: "Pritesh Patel"}).then((res) =>{
  //   console.log(res.result);
  // });

  //Find one and delete

  // db.collection ('Users').findOneAndDelete({Name: "Mrugesh Patel"}).then((res) =>{
  //   console.log(res);
  // });

  // client.close();
});
