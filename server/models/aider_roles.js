/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aider_roles', {
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    security_level: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'aider_security_levels',
        key: 'security_level'
      }
    },
    applies_to_discord: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    discord_role_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    requestable: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    free_join: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    auto_managed: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'aider_roles'
  });
};
