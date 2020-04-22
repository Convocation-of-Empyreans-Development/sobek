/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flag', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    magnitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '1.00000'
    }
  }, {
    tableName: 'flag'
  });
};
