
exports.up = function(knex) {
  return knex('cars').where('id', 4).update({"class":"Sedane"})
    .then(() => {return knex('cars').where('id', 19).update({"class":"Coupe"})})
    .then(() => {return knex('cars').where('id', 20).update({"class":"SUV"})})
    .then(() => {return knex('cars').where('id', 6).update({"class":"Sport"})})
    .then(() => {return knex('cars').where('id', 12).update({"class":"Sport"})})
    .then(() => {return knex('cars').where('id', 16).update({"class":"Sport"})})
    .then(() => {return knex('cars').where('id', 11).update({"class":"Executive"})})
    .then(() => {return knex('cars').where('id', 10).update({"class":"Sedane"})})
    .then(() => {return knex('cars').where('id', 9).update({"class":"Sedane"})})
    .then(() => {return knex('cars').where('id', 5).update({"class":"Coupe"})})
    .then(() => {return knex('cars').where('id', 17).update({"class":"SUV"})})
    .then(() => {return knex('cars').where('id', 1).update({"class":"SUV"})})
    .then(() => {return knex('cars').where('id', 15).update({"class":""})})
};

exports.down = function(knex) {
};
