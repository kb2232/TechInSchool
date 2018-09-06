'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('classes', [
      {
        className: "Biology 101",
        subject: "Biology",
        timePeriod: "10:40:00",
        day: "Thursday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "Algebra",
        subject: "Mathematics",
        timePeriod: "12:20:00",
        day: "Wednesday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "AP Literature",
        subject: "English",
        timePeriod: "13:10:00",
        day: "Friday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "Biology Honors",
        subject: "Biology",
        timePeriod: "08:15:00",
        day: "Monday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "Biology 101",
        subject: "Biology",
        timePeriod: "10:40:00",
        day: "Monday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "Biology 101",
        subject: "Biology",
        timePeriod: "10:40:00",
        day: "Monday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "Physics 101",
        subject: "Physics",
        timePeriod: "13:50:00",
        day: "Wednesday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "Chemistry 101",
        subject: "Chemistry",
        timePeriod: "12:00:00",
        day: "Thursday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        className: "AP Physics",
        subject: "Physics",
        timePeriod: "11:30:00",
        day: "Friday",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('classes', null, {});
  }
};
