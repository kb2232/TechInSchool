'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('grades', [
        {
          type: "Quiz",
          score: 85,
          date: "2018-5-3",
          classId: 1,
          studentId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Quiz",
          score: 30,
          date: "2018-5-3",
          classId: 1,
          studentId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Quiz",
          score: 60,
          date: "2018-5-3",
          classId: 2,
          studentId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Quiz",
          score: 80,
          date: "2018-5-3",
          classId: 3,
          studentId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Exam",
          score: 70,
          date: "2018-5-3",
          classId: 4,
          studentId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "Exam",
          score: 100,
          date: "2018-5-3",
          classId: 4,
          studentId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('grades', null, {});
  }
};
