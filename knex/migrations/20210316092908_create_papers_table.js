exports.up = function (knex) {
  return knex.schema.createTable("papers", function (table) {
    table.increments("id");
    table.string("paper_id");
    table.string("title").notNullable();
    table.text("summary");
    table.string("url");
    table.string("code");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("papers");
};
