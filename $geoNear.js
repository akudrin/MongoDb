//{ $geoNear: { <geoNear options> } }
db.places.aggregate([
  {
    $geoNear: {
      near: { type: "Point", coordinates: [-73.99279, 40.719296] },
      distanceField: "dist.calculated",
      maxDistance: 2,
      query: { category: "Parks" },
      includeLocs: "dist.location",
      spherical: true,
    },
  },
]);
