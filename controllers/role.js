const response = require("../components/response");
const {roles} = require("../components/database");

exports.getRoles = (req,res) => {

    roles.findAll({raw:true}).then(result => {

        response.res200(res, result);

    }).catch(err => {

        console.log('err =>', err);
        response.res500(res);

    });

}