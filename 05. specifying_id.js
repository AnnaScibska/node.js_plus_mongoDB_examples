// SPECIFYING AN ID

// to run: C:\Users\Your Name\path...>node file_name.js

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { _id: 154, name: 'Google', address: 'Main Road 88'},
    { _id: 155, name: 'Tasty Lemon', address: 'Red street 13'},
    { _id: 156, name: 'Vanilla Dream', address: 'le Mesnil 5'}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});