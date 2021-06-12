const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "unique_employee_detail_id",
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "unique_employee_detail_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
