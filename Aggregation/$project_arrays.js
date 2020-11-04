db.friends.aggregate([
  { $project: { _id: 0, examScore: { $slice: ["$examScores", 2, 1] } } },
]);

db.friends.aggregate([
  { $project: { _id: 0, numScores: { $size: "$examScores" } } },
]);
