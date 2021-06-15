var DataTypes = require("sequelize").DataTypes;
var _roles = require("./roles");
var _user = require("./user");

function initModels(sequelize) {
  var roles = _roles(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    roles,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
