const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "unique_company_id",
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'company',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "unique_company_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
