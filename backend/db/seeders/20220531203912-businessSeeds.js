'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        {
          ownerId: 1,
          title: 'Adda Coffee & Tea House',
          description: 'Adda is a Bengali word; it means to indulge in informal or friendly conversation with a group of people, such as friends, family, or colleagues. It also refers to the place to have that conversation. Our aim at ADDA is to create a community space for our neighbors, local artists and innovators for relaxation, conversation, peaceful working, and warm company.',
          address: '200 South Highland Ave',
          city: 'Pittsburgh',
          state: 'PA',
          zipCode: '15206',
          imageUrl: '/images/Adda.JPG',
          lat: 40.458708,
          lng: -79.925206
          },
          {
          ownerId: 1,
          title: 'Palm Court',
          description: 'Enjoy small plates, cocktails, wines by the glass overlooking the grand lobby.',
          address: '530 William Penn Place',
          city: 'Pittsburgh',
          state: 'PA',
          zipCode: '15219',
          imageUrl: '/images/Omni.JPG',
          lat: 40.440636,
          lng: -79.99663
          },
          {
          ownerId: 2,
          title: 'Queen Mary Tea Room',
          description: "One of the oldest independent Tea Room in America. Treasured memories are made at Seattle's Queen Mary Tearoom, where healthful teas, delicious meals, and mouthwatering desserts are savored. Once inside, guests are intimately surrounded by Victorian elegance. The ambiance is accented with English bone china, delicate lace, and rich wainscoting.",
          address: '2912 NE 55th St',
          city: 'Seattle',
          state: 'WA',
          zipCode: '98105',
          imageUrl: '/images/tea5.jpg',
          lat: 47.668686,
          lng: -122.295582
          },
          {
          ownerId: 2,
          title: 'Elm',
          description: 'Located in the heart of New Canaan, Connecticut, elm restaurant has become a beloved destination for its world-class cuisine and local Connecticut charm. The team at elm present an innovative and elegant approach to seasonal American cuisine that is rooted in tradition. Come celebrate the bounty of the season with us.',
          address: '73 Elm St',
          city: 'New Canaan',
          state: 'CT',
          zipCode: '06840',
          imageUrl: '/images/elm.jpg',
          lat: 41.14701,
          lng: -73.493707
          },
          {
          ownerId: 3,
          title: 'The Pfister',
          description: 'Enjoy a respite from the bustle of daily chores and briefly return to a gentler era. We have created an experience that will surely become a treasured memory for you and yours. Guests enjoy a tableside tea blending, presented in all-silver service by a Pfister Tea Butler while learning about each variety of tea, the origins, unique flavors, effects on mood and health, blending options, and perfect pairings. The afternoon tea menu is complete with fresh scones, sandwiches, and pastries.',
          address: '424 East Wisconsin Ave',
          city: 'Milwaukee',
          state: 'WI',
          zipCode: '53202',
          imageUrl: '/images/pfister.jpeg',
          lat: 43.039131,
          lng: -87.905782
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Businesses', null, {});
  }
};
