exports.up = function (knex) {
    return knex.schema.table('pets', tbl => {
        tbl.increments()
        tbl.string('name')
        .notNullable()
        tbl.integer('age')
        .notNullable()
        tbl.gender('gender')
    })
}

exports.down = function(knex) {
    return knex.schema.table('pets', tbl => {
    tbl.dropColumn('gender')
    tbl.dropColumn('age')
    tbl.dropColumn('name')
    })
};