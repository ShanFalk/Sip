'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});

  Business.getCurrentBusinessById = async function (id) {
    return await Business.findByPk(id);
  }
  Business.signup = async function (
    {
      ownerId,
      title,
      description,
      address,
      city,
      state,
      zipCode,
      imageUrl,
  }) {

  }

  Business.associate = function(models) {
    Business.belongsTo(models.User, {foreignKey: 'ownerId'})
  };
  return Business;
};
