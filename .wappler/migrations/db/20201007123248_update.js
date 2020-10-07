
exports.up = function(knex) {
  return knex('service_hours').where('id', 2).update({"date":"10/5/2020"})
    .then(() => {return knex('service_hours').where('id', 3).update({"date":"10/5/2020"})})
    .then(() => {return knex('service_hours').where('id', 7).update({"date":"10/5/2020"})})
    .then(() => {return knex('service_hours').where('id', 5).update({"date":"10/5/2020"})})
    .then(() => {return knex('service_hours').where('id', 1).update({"date":"10/5/2020"})})
    .then(() => {return knex('service_hours').where('id', 6).update({"date":"10/5/2020"})})
    .then(() => {return knex('service_hours').where('id', 4).update({"date":"10/5/2020"})})
};

exports.down = function(knex) {
};
