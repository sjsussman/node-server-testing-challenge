exports.up = function (knex) {
    return knex.schema.createTable('pets', tbl => {
        tbl.increments()
        tbl.string('name')
        .notNullable()
        tbl.integer('age')
        .notNullable()
        tbl.string('gender')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pets')
};