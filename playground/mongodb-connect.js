const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something Amazing',
  //   complete: false
  // },(err,res) => {
  //   if(err){
  //     return console.log('Unable to insert todo.', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   Name: 'Pritesh Patel',
  //   Age: 26,
  //   Location: 'Lake Forest,CA'
  // },(err,res) => {
  //   if(err){
  //     return console.log('Unable to insert Users.', err);
  //   }
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});
