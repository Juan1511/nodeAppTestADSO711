'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: "Ciencias",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "politica",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Deportes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "video-juegos",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
