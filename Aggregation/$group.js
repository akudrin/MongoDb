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
