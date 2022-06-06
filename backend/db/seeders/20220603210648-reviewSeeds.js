'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          businessId: 1,
          rating: 5,
          answer: 'Delicious matcha!'
          },
          {
          userId: 2,
          businessId: 1,
          rating: 4,
          answer: 'Cute place.'
          },
          {
          userId: 3,
          businessId: 1,
          rating: 3,
          answer: 'Pretty good tea selection, but it was so crowded!'
          },
          {
          userId: 1,
          businessId: 2,
          rating: 2,
          answer: 'I was looking forward to trying this place, but it was a bit of a let down.'
          },
          {
          userId: 2,
          businessId: 2,
          rating: 5,
          answer: "The best tea service I've ever had!!"
          },
          {
          userId: 3,
          businessId: 2,
          rating: 4,
          answer: 'Lovely tea service, although kind of pricey.'
          },
          {
          userId: 1,
          businessId: 3,
          rating: 1,
          answer: 'Tea was cold upon arrival, tea sandwiches were dry and tasteless.'
          },
          {
          userId: 2,
          businessId: 3,
          rating: 3,
          answer: 'It seems we caught them on a good day considering the other review. Tea was delicious.'
          },
          {
          userId: 1,
          businessId: 4,
          rating: 5,
          answer: 'Exceptional tea service! The presentation was phenomenal!'
          },
          {
          userId: 1,
          businessId: 5,
          rating: 4,
          answer: 'Took some friends here last weekend. They had a very nice time. They especially enjoyed the seasonal dessert.'
          }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
