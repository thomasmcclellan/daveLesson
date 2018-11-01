'use strict';

const chance = require('chance')()

module.exports = {
  up: (queryInterface, Sequelize) => {

   let userArr= [];

   for (let i = 1; i < 101; i++) {
     const userObj = {
       id: i,
       firstName: chance.first({ gender: 'female' }),
       lastName: chance.last(),
       email: chance.email(),
       createdAt: new Date(Date.now()),
       updatedAt: new Date(Date.now())
     };
     userArr.push(userObj);
   }
   return queryInterface.bulkInsert('users', userArr, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
