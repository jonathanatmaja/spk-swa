const { company } = require("../components/database");
const response = require("../components/response");
const axios = require("axios");

exports.getAllCompany = (req,res) => {

  company.findAndCountAll().then(result => {

    response.res200(res, result);

  });

};