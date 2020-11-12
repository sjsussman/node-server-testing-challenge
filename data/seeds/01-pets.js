exports.seed = function (knex) {
  const pet = [
    {
      name: 'Nipper',
      gender: 'Cat',
      age: 12
    },
  ];
  return knex("pets")
    .insert(pet)
    .then(() => console.log("\n== Seed data for roles table added. ==\n"));
};