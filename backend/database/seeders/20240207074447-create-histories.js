const { faker } = require('@faker-js/faker'); // Requerir Faker para generar datos ficticios.
const { Aspirant, Profession } = require("../models/index"); // Requerir los registros para completar la relacion entre tablas.

// Introducir en la consola para ejecutar el seeder completo.
// npx sequelize-cli db:seed

// Introducir en la consola para ejecutar el seeder individualmente
// npx sequelize-cli db:seed --seed 20240207074447-create-histories

// Es preferible seguir en este orden los comandos npx 1. aspirants, 2. profiles, 3. professions y 4. histories.

module.exports = {

  up: async (queryInterface, Sequelize) => { // Metodo para iniciar el "sembrado".

    let histories = [];

    let aspirants = await Aspirant.findAll(); // Obtenemos a los aspirantes disponibles

    let profession = await Profession.findAll(); // Obtenemos las Profesiones disponibles.
    let lowestId = Math.min(...profession.map(profession => profession.id)); // Obtenemos el id mas bajo existente.
    let highestId = Math.max(...profession.map(profession => profession.id)); // Obtenemos el id mas alto existente.


    aspirants.forEach(aspirant => {

      let fakePosition = faker.person.jobTitle() // Generamos un string con un cargo ficticio

      histories.push({

        profession: faker.number.int({min: lowestId, max: highestId}), 

        aspirant: aspirant.id,

        company: faker.company.name(),

        // jobTitle.() nos genera un string de 3 palabras; las 2 primeras son del cargo 
        // la ultima se refiere a la profesion, por lo que la descartamos mediante .split(" ")
        position: `${fakePosition.split(" ")[0]} ${fakePosition.split(" ")[1]}`,

        yearsOnDuty: faker.number.int({min: 1, max: 25})

      })
    });

    return queryInterface.bulkInsert("Histories", histories, {}); // Insertamos los datos en la base de datos.
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Histories", null, {}); // Metodo para revertir el "sembrado"
  }
};