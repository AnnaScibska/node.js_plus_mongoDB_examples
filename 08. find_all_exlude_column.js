// FIND ALL BUT EXLUDE CERTAIN FIELDS (COLUMNS)

// to run: C:\Users\Your Name\path...>node file_name.js

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, {fields: { _id: 0, name: 1, address: 1 }}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, {fields: { _id: 0 }}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log("result");
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}, {fields: { address: 0 }}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, {fields: { _id: 0, name: 1 }}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});