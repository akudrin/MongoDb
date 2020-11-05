/*
In MongoDB, delete operations target a single collection.
db.collection.deleteOne To delete a single document
db.collection.updateMany To delete multiple documents
*/
db.student.deleteOne({ name: "John" });
db.student.deleteMany({ name: "Jack" });
//delete all documents from the collection student
db.student.deleteMany({});
