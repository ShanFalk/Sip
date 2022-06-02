'use strict';

const nodeGeocoder = require('node-geocoder');
const options = {
  provider: 'openstreetmap'
};
const { User } = require('./index.js');

const geoCoder = nodeGeocoder(options);

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
    return await Business.findByPk(id, {
      include: User
    });
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

    const locationRes = await geoCoder.geocode({address, city, state, zipCode});

    const lat = locationRes[0].latitude;
    const lng = locationRes[0].longitude;

    const business = await Business.create({
      ownerId,
      title,
      description,
      address,
      city,
      state,
      zipCode,
      imageUrl,
      lat,
      lng
    });
    return await Business.findByPk(business.id);
  }

  Business.associate = function(models) {
    Business.belongsTo(models.User, {foreignKey: 'ownerId'})
  };
  return Business;
};
