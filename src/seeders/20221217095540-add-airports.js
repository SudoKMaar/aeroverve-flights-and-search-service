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
      "Airports",
      [
        {
          name: "Agatti Airport",
          cityId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sardar Vallabhbhai Patel International Airport",
          cityId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lengpui Airport",
          cityId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sri Guru Ram Dass Jee International Airport",
          cityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bagdogra Airport",
          cityId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belgaum Airport",
          cityId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kempegowda International Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bhavnagar Airport",
          cityId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Raja Bhoj Airport",
          cityId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Biju Patnaik International Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chaudhary Charan Singh International Airport",
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chennai International Airport",
          cityId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Coimbatore International Airport",
          cityId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jolly Grant Airport",
          cityId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dibrugarh Airport",
          cityId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dimapur Airport",
          cityId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gaya Airport",
          cityId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Goa International Airport",
          cityId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gorakhpur Airport",
          cityId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lokpriya Gopinath Bordoloi International Airport",
          cityId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dabolim Airport",
          cityId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gorakhpur Airport",
          cityId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gwalior Airport",
          cityId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Imphal Airport",
          cityId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Devi Ahilyabai Holkar International Airport",
          cityId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jabalpur Airport",
          cityId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jaipur International Airport",
          cityId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jammu Airport",
          cityId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jamnagar Airport",
          cityId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jodhpur Airport",
          cityId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jorhat Airport",
          cityId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kadapa Airport",
          cityId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kailashahar Airport",
          cityId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kandla Airport",
          cityId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kangra Airport",
          cityId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kannur International Airport",
          cityId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kanpur Airport",
          cityId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Khajuraho Airport",
          cityId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cochin International Airport",
          cityId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kolhapur Airport",
          cityId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Netaji Subhas Chandra Bose International Airport",
          cityId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Calicut International Airport",
          cityId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kushok Bakula Rimpochee Airport",
          cityId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lilabari Airport",
          cityId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chaudhary Charan Singh International Airport",
          cityId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sahnewal Airport",
          cityId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Madurai Airport",
          cityId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mangalore International Airport",
          cityId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chhatrapati Shivaji Maharaj International Airport",
          cityId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysore Airport",
          cityId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dr. Babasaheb Ambedkar International Airport",
          cityId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shri Guru Gobind Singh Ji Airport",
          cityId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Birsa Munda Airport",
          cityId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swami Vivekananda Airport",
          cityId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pantnagar Airport",
          cityId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pasighat Airport",
          cityId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jay Prakash Narayan Airport",
          cityId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Veer Savarkar International Airport",
          cityId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Puducherry Airport",
          cityId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pune Airport",
          cityId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Rajahmundry Airport",
          cityId: 62,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rajkot Airport",
          cityId: 63,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Birsa Munda Airport",
          cityId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shillong Airport",
          cityId: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shimla Airport",
          cityId: 66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Silchar Airport",
          cityId: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Surat Airport",
          cityId: 69,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tezpur Airport",
          cityId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tiruchirapalli International Airport",
          cityId: 71,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tirupati Airport",
          cityId: 72,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Trivandrum International Airport",
          cityId: 73,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maharana Pratap Airport",
          cityId: 74,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vadodara Airport",
          cityId: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lal Bahadur Shastri International Airport",
          cityId: 76,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vijayawada Airport",
          cityId: 77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Visakhapatnam Airport",
          cityId: 78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Warangal Airport",
          cityId: 79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ziro Airport",
          cityId: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rani Durgavati Airport",
          cityId: 81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kushok Bakula Rimpochee Airport",
          cityId: 84,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lilabari Airport",
          cityId: 85,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Sheikh ul-Alam International Airport",
          cityId: 88,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Continue adding more airports here...
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
