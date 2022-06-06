'use strict';

const nodeGeocoder = require('node-geocoder');
const options = {
  provider: 'openstreetmap'
};
const { User } = require('./index.js');

const geoCoder = nodeGeocoder(options);

module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 50]
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
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
    Business.hasMany(models.Review, {foreignKey: 'businessId'})
  };
  return Business;
};
