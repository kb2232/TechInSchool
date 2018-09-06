'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [
      {
        firstName: "Jeff",
        lastName: "Cash",
        contact: "2011234522",
        address: "123 New St.",
        dob: "2002-06-21",
        photoLink: "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Nicole",
        lastName: "Jeffreys",
        contact: "2014612532",
        address: "588 Main St.",
        dob: "2001-12-31",
        photoLink: "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "John",
        lastName: "Jordan",
        contact: "2016946999",
        address: "522 Apple Pl.",
        dob: "2002-05-12",
        photoLink: "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Rebecca",
        lastName: "Cunningham",
        contact: "2015321353",
        address: "483 Main St.",
        dob: "2002-01-05",
        photoLink: "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Brian",
        lastName: "Smith",
        contact: "2018968412",
        address: "136 Market Ct.",
        dob: "2001-10-15",
        photoLink: "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
