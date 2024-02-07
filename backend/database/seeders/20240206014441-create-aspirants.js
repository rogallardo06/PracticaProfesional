const { faker } = require('@faker-js/faker'); // Requerir Faker para generar datos ficticios.

// Introducir en la consola para ejecutar el seeder completo.
// npx sequelize-cli db:seed

// Introducir en la consola para ejecutar el seeder individualmente
// npx sequelize-cli db:seed --seed 20240206014441-create-aspirants

// Es preferible seguir en este orden los comandos npx ( 1. aspirants, 2. profiles, 3. professions y 4. histories.

module.exports = {

  up: (queryInterface, Sequelize) => { // Metodo para iniciar el "sembrado"

    let aspirants = [];
    let amount = 10;

    while(amount--){
      
      // Guardamos los nombres generado aleatoriamente para reusarlos posteriormente.
      let fakeName = faker.person.firstName(); 
      let fakeSurname = faker.person.lastName(); 
      let fakeUsername = faker.internet.userName({firstName: fakeName, lastName: fakeSurname})

      aspirants.push({ // Generamos Registros ficticios sobre aspirantes.

        dni: faker.number.int({min: 30000000, max: 60000000}),

        name: fakeName,

        surname: fakeSurname,

        email: faker.internet.email({firstName: fakeName, lastName: fakeSurname}),

        tel: `+54 9 388 ${faker.string.numeric(3)}-${faker.string.numeric(4)}`,

        linkedin: `https://www.linkedin.com/in/${fakeUsername}`,

        birthDate: faker.date.birthdate({min: 1985}),

        gender: faker.person.sex(),

        image: faker.image.avatarLegacy()
      })
      
    }

    return queryInterface.bulkInsert("Aspirants", aspirants, {}); // Insertamos los datos en la base de datos.
  },

  down: (queryInterface, Sequelize) => { // Metodo para revertir el "sembrado"

    return queryInterface.bulkDelete("Aspirants", null, {});
  }
};