'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.User); // Un article pertenece a un usuario
      models.User.hasMany(Article); // Un usuario tiene muchos articulosnpx 

      //Un articulo puede pertenecer a muchos categorias
      Article.belongsToMany(models.Category, {
        through: 'articleCategory',
        as: 'categories',
      });
    }
  }
  Article.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};