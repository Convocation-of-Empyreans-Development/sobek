/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fleet_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'fleet',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'event'
  });
};
