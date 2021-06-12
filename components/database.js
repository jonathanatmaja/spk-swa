const { Sequelize, DataTypes } = require('sequelize');

const maindb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    timezone: '+07:00'
});

const company = require("../models/company");
const companyModel = company(maindb, DataTypes);

module.exports = { 
    company: companyModel
};
