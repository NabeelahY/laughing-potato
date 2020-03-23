exports.up = function(knex) {
  return knex.schema.createTable('books_test', tbl => {
    tbl.increments();
    tbl.text('author', 128).notNullable();
    tbl.text('title', 128).notNullable();
    tbl.text('summary', 256).notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books_test')
};
