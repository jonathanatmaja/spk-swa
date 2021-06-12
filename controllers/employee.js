const {employee} = require("../components/database");
const response = require("../components/response");
const {v4} = require("uuid");

exports.addEmployee = (req,res) => {

    const id = v4();
    const name = req.body.name;
    const age = +req.body.age;
    const dateOfBirth = req.body.date_of_birth;
    const salary = +req.body.salary;
    const employeeId = req.body.employee_id;

    const data = {
        id,
        name,
        age,
        date_of_birth: dateOfBirth,
        salary,
        employee_id: employeeId,
        deleted: false
    }

    //check apakah employee_id sudah terdaftar
    employee.findOne({where:{employee_id: employeeId, deleted: false}}).then(result => {

        if(result){

            response.res400(res, 'Id karyawan sudah terdaftar');

        }else{

            employee.create(data).then(result => {
        
                response.res200(res, 'Data berhasil ditambahkan');
        
            }).catch(err => {
        
                console.log('err =>', err);
                response.res500(res);
        
            });

        }

    }).catch(err => {

        console.log('err =>', err);
        response.res500(res);

    });

}

exports.getAllEmployee = (req,res) => {

    const employeeId = req.query.employee_id;
    let where = {
        deleted: false
    };

    if(typeof employeeId !== "undefined"){

        where.employee_id = employeeId;

    }

    employee.findAll({where}).then(result => {

        response.res200(res, result);

    }).catch(err => {

        console.log('err =>', err);
        response.res500(res);

    });

}

exports.deleteEmployee = (req,res) => {

    const employeeId = req.params.employee_id;

    employee.findOne({where:{employee_id: employeeId, deleted: false}}).then(result => {

        if(result){

            const updateData = {
                deleted: true
            }

            employee.update(updateData,{where:{employee_id: employeeId}}).then(result => {

                response.res200(res, `Hapus data karyawan ${employeeId} berhasil.`);

            }).catch(err => {

                console.log('err =>', err);
                response.res500(res);

            });

        }else{

            response.res404(res, 'Data karyawan tidak ditemukan');

        }

    }).catch(err => {

        console.log('err =>', err);
        response.res500(res);

    });

};