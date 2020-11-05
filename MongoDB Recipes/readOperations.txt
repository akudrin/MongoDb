//Use the following syntax to retrieve documents from a collection.
db.collection.find()
db.person.find({})
db.person.find({name:"shobana"})
db.person.find({age:{$gt:10}})
db.person.find({ name:"shobana",age:{$gt:10}})
db.person.find( { $or: [ { name: "shobana" }, { age: { $eq: 20
} } ] } )
