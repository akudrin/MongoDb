/*
   {
    $group:
      {
        _id: <expression>, // Group By Expression
        <field1>: { <accumulator1> : <expression1> },
        ...
      }
   }
*/
db.persons
  .aggregate([
    { $match: { gender: "female" } },
    {
      $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } },
    },
    { $sort: { totalPersons: -1 } },
  ])
  .pretty();

db.persons
  .aggregate([
    { $match: { "dob.age": { $gt: 50 } } },
    {
      $group: {
        _id: { gender: "$gender" },
        totalPersons: { $sum: 1 },
        averageAge: { $avg: "$dob.age" },
      },
    },
    { $sort: { totalPersons: -1 } },
  ])
  .pretty();

//The following aggregation operation uses the $group stage to count the number of documents in the sales collection
db.sales.aggregate([
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },
]);

db.movies.aggregate([
  { $match: { metacritic: { $gt: 0 } } },
  {
    $group: {
      _id: null,
      averageMetacritic: { $avg: "$metacritic" },
    },
  },
]);

db.friends.aggregate([
  { $unwind: "$hobbies" },
  { $group: { _id: { age: "$age" }, allHobbies: { $addToSet: "$hobbies" } } },
]);
