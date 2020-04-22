/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aider_role_requests', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    requested_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reviewed: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    reviewed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reviewer_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    approved: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'aider_role_requests'
  });
};
