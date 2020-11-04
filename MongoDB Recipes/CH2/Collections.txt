//Use the following syntax to create a collection.
//db.createCollection (<name>)
db.createCollection("person")
//Use the following syntax to create a collection.
//db.createCollection (<name>,{capped:<boolean>,size:<number>,max:<number>})
//size in bytes
db.createCollection("student",{capped: true,size:1000,max:2})
db.student.insert([{ "_id" : 10001, "name" : "Taanushree A S",
"age" : 10 },{ "_id" : 10002, "name" : "Aruna M S", "age" : 14 }])
//MongoDB retrieves the results in the order of insertion. To
//retrieve documents in the reverse order, use sort() and set the $natural
//parameter to -1 as shown here.
db.student.find().sort({$natural:-1})
//Capped collections work similar to a circular buffer:
//Once it fills its allocated space, it makes room for new documents by
//overwriting the oldest documents in the collection.
