'use strict';
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('post', {
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          Post.belongsTo(models.user, { as: 'Author', foreignKey: 'authorId' });
        }
      }
    });
  return Post;
};