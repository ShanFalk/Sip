'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 5,
        min: 1
      }
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});

  Review.getBizReviews = async function (id) {
    return await Review.findAll({
      where: {
        businessId: id
      }
    })
  }


  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Business, {foreignKey: 'businessId'})
  };
  return Review;
};
