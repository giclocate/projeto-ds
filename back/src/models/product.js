const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo sem carregar o Favorite ainda
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  craftsmanName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  picture: {
    type: DataTypes.BLOB,
    allowNull: true
  },
  whatsappNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  linkedONG: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.ENUM('P', 'M', 'G'),
    allowNull: true
  },
  avalible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'products',
  schema: 'produtos_sociais',
  timestamps: true
});

module.exports = Product;
