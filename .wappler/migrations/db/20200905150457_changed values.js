
exports.up = function(knex) {
  return knex('cars').where('id', 1).update({"image":"/assets/img/f1","price":"10,000,000"})
    .then(() => {return knex('cars').where('id', 2).update({"image":"/assets/img/porsche","price":"100,000"})})
    .then(() => {return knex('cars').where('id', 3).update({"image":"","price":""})})
};

exports.down = function(knex) {
};
