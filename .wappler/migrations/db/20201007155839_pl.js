
exports.up = function(knex) {
  return knex('service_hours').where('id', 1).update({"no_appointments":0})
    .then(() => {return knex('service_hours').where('id', 2).update({"no_appointments":0})})
    .then(() => {return knex('service_hours').where('id', 3).update({"no_appointments":0})})
    .then(() => {return knex('service_hours').where('id', 4).update({"no_appointments":0})})
    .then(() => {return knex('service_hours').where('id', 5).update({"no_appointments":0})})
};

exports.down = function(knex) {
};
