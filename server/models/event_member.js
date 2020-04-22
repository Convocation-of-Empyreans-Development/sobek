/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'event',
        key: 'id'
      }
    },
    character_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'eve_characters',
        key: 'character_id'
      }
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'event_member'
  });
};
