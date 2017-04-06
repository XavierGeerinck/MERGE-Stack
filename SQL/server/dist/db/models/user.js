'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        User.hasMany(models.userToken);
      }
    }
  });
  return User;
};