const { faker } = require('@faker-js/faker'); // Requerir Faker para generar datos ficticios.
const { Aspirant } = require("../models/index"); // Requerir los registros para completar la relacion entre tablas.

// Introducir en la consola para ejecutar el seeder completo.
// npx sequelize-cli db:seed

// Introducir en la consola para ejecutar el seeder individualmente
// npx sequelize-cli db:seed --seed 20240206222719-create-profiles

// Es preferible seguir en este orden los comandos npx ( 1. aspirants, 2. profiles, 3. professions y 4. histories.

module.exports = {

  up: async (queryInterface, Sequelize) => { // Metodo para iniciar el "sembrado"

    let profiles = [];

    let aspirants = await Aspirant.findAll(); 

    aspirants.forEach(aspirant => {

      let username = faker.internet.userName({firstName: aspirant.name}) // Generamos un nombre de usuario en base al nombre del aspirante.

      profiles.push({ // Generamos Registros ficticios sobre los perfiles de gitHub pertenecientes a los aspirantes.

        link: `https://github.com/${username}`,

        aspirantId: aspirant.id,

        name: username,

        contributions: faker.number.int({min: 50, max: 10000}),

        stars: faker.number.int({max: 150})
      })
    });

    return queryInterface.bulkInsert("Profiles", profiles, {}); // Insertamos los datos en la base de datos.
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Profiles", null, {}); // Metodo para revertir el "sembrado"
  }
};