'use strict';

module.exports = function (sequelize, DataTypes) {
  var UserToken = sequelize.define('userToken', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
        UserToken.belongsTo(models.user, { foreignKey: 'userId' });
      }
    }
  });
  return UserToken;
};