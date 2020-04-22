/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fleet', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    loot_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payout_value: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    corp_cut: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fleet_commander: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'aider_user_characters',
        key: 'character_id'
      }
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creator: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'aider_users',
        key: 'user_id'
      }
    },
    ping_rate: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ping_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'fleet'
  });
};
