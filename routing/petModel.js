const db = require('../data/db-config');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(pet) {
  //2- implement the code to make the test pass
  const [id] = await db('pets').insert(pet);
  return db('pets').where({id}).first();
}

async function update(id, changes) {
  await db('pets').update(changes).where({id})
  return db('pets').where({id}).first()
}

function remove(id) {
  return db('pets').where({id}).delete();
}

function getAll() {
  return db('pets');
}

function findById(id) {
  return null;
}
