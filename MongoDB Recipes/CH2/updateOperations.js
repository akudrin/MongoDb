/*
db.collection.updateOne To modify a single document
db.collection.updateMany To modify multiple documents
db.collection.replaceOne To replace the first matching document in the
collection that matches the filter
*/
db.student.updateOne({ name: "Joshi" }, { $set: { "marks.english": 20 } });
db.student.updateMany(
  { result: "fail" },
  { $set: { "marks.english": 20, "marks.maths": 20 } }
);
db.student.replaceOne(
  { name: "John" },
  { _id: 1001, name: "John", marks: { english: 36, maths: 39 }, result: "pass" }
);
