/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('member_entities', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    entity_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    entity_type: {
      type: DataTypes.ENUM('alliance','corporation','character'),
      allowNull: false
    }
  }, {
    tableName: 'member_entities'
  });
};
