//Use the following syntax to retrieve documents from a collection.
db.collection.find();
db.person.find({});
db.person.find({ name: "shobana" });
db.person.find({ age: { $gt: 10 } });
db.person.find({ name: "shobana", age: { $gt: 10 } });
db.person.find({ $or: [{ name: "shobana" }, { age: { $eq: 20 } }] });
db.employeedetails.find({ projects: ["Hadoop", "MongoDB"] });
db.employeedetails.find({ projects: "MongoDB" });
db.employeedetails.find({ scores: { $gt: 26 } });
db.employeedetails.find({ scores: { $gt: 20, $lt: 24 } });
