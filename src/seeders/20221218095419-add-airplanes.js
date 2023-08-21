"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 737",
          capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A320",
          capacity: 350,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 777",
          capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 747",
          capacity: 320,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A330",
          capacity: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A380",
          capacity: 853,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 787 Dreamliner",
          capacity: 242,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Embraer E190",
          capacity: 114,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 757",
          capacity: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A340",
          capacity: 375,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A319",
          capacity: 160,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 767",
          capacity: 290,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Embraer E175",
          capacity: 88,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A350",
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Bombardier CRJ900",
          capacity: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 727",
          capacity: 189,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A321",
          capacity: 220,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 787-9",
          capacity: 296,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A300",
          capacity: 361,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 707",
          capacity: 219,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Embraer E195",
          capacity: 124,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A310",
          capacity: 280,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Bombardier CS300",
          capacity: 160,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 737 MAX 8",
          capacity: 210,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Embraer E170",
          capacity: 76,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A318",
          capacity: 132,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 777X",
          capacity: 384,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Airbus A330neo",
          capacity: 440,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNumber: "Boeing 767-400ER",
          capacity: 304,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
