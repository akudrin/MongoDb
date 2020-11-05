//Use the following syntax to insert documents.
//db.collection.insertOne()
//db.collection.insertMany()
db.person.insertOne({ _id: 1001, name: "Taanushree AS", age: 10 });
db.person.insertMany([
  { _id: 1003, name: "Anba V M", age: 16 },
  { _id: 1004, name: "shobana", age: 44 },
]);
