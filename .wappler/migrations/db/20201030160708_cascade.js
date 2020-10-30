
exports.up = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
      table.foreign('image_for_car').references('id').inTable('cars').onDelete('CASCADE').onUpdate('undefined');
    })
    .table('owned_products', function (table) {
      table.dropForeign('car_id');
      table.foreign('car_id').references('id').inTable('cars').onDelete('CASCADE').onUpdate('undefined');
    })
    .table('reviews', function (table) {
      table.dropForeign('review_for_car');
      table.foreign('review_for_car').references('id').inTable('cars').onDelete('CASCADE').onUpdate('undefined');
    })
    .table('service_appointments', function (table) {
      table.dropForeign('for_car');
      table.foreign('for_car').references('id').inTable('cars').onDelete('CASCADE').onUpdate('undefined');
    })
    .table('specs', function (table) {
      table.dropForeign('specs_for_car');
      table.foreign('specs_for_car').references('id').inTable('cars').onDelete('CASCADE').onUpdate('undefined');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('gallery', function (table) {
      table.dropForeign('image_for_car');
    })
    .table('owned_products', function (table) {
      table.dropForeign('car_id');
    })
    .table('reviews', function (table) {
      table.dropForeign('review_for_car');
    })
    .table('service_appointments', function (table) {
      table.dropForeign('for_car');
    })
    .table('specs', function (table) {
      table.dropForeign('specs_for_car');
    })
};
