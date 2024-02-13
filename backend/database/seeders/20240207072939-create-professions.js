const { faker } = require('@faker-js/faker');  // Requerir Faker para generar datos ficticios.

// Introducir en la consola para ejecutar el seeder completo.
// npx sequelize-cli db:seed:all

// Introducir en la consola para ejecutar el seeder individualmente
// npx sequelize-cli db:seed --seed 20240207072939-create-professions

// Es preferible seguir en este orden los comandos npx ( 1. aspirants, 2. profiles, 3. professions y 4. histories.

module.exports = {

  up: async (queryInterface, Sequelize) => { // Metodo para iniciar el "sembrado"

    let professions = [
      { name: "Director" },
      { name: "Manager" },
      { name: "Strategist" },
      { name: "Developer" },
      { name: "Administrator" },
      { name: "Specialist" },
      { name: "Officer" },
      { name: "Consultant" },
      { name: "Producer" },
      { name: "Supervisor" },
      { name: "Liaison" },
      { name: "Coordinator" },
      { name: "Planner" },
      { name: "Assistant" },
      { name: "Associate" },
      { name: "Engineer" },
      { name: "Architect" },
      { name: "Facilitator" },
      { name: "Officer" },
      { name: "Orchestrator" },
    
  ];
    return queryInterface.bulkInsert("Professions", professions, {}); // Insertamos los datos en la base de datos.
  },

  // npx sequelize-cli db:seed:undo --seed 20240207072939-create-professions || npx sequelize-cli db:seed:undo:all

  down: (queryInterface, Sequelize) => { // Metodo para revertir el "sembrado"

    return queryInterface.bulkDelete("Professions", null, {});
  }
};