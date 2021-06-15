const response = require("../components/response");
const {user} = require("../components/database");
const bcrypt = require("bcrypt");
const {v4} = require("uuid");

exports.login = (req,res) => {
 
    const email = req.body.email;
    const password = req.body.password;

    //!check if email exists
    user.findOne({where:{
        email,
        deleted:false
    }}).then(result => {

        if(result){
            //!compare password
            const userPassword = result.password;
            bcrypt.compare(password, userPassword, (err,hashResult) => {

                if(hashResult){

                    response.res200(res, {name:result.name, id:result.id, role:result.role});

                }else{
                    
                    response.res404(res, 'Email/kata sandi salah');

                }

            });

        }else{

            response.res404(res, 'Email/kata sandi salah');

        }

    }).catch(err => {

        console.log('err =>', err);
        response.res500(res);

    });

}

exports.register = (req,res) => {

    const email  = req.body.email;
    const name      = req.body.name;
    const password  = req.body.password;
    const role      = req.body.role;
    const address   = req.body.address;

    //!check if Email already exists
    user.findOne({where:{
        email,
        deleted: false
    }}).then(async result => {

        if(result){

            response.res400(res, 'Akun sudah terdaftar');

        }else{

            //!process register
            const hashPassword = bcrypt.hashSync (password,10);
            const registrationData = {
                id: v4(),
                email,
                name,
                password: hashPassword,
                role,
                address
            }

            await user.create(registrationData);
            response.res200(res, 'Registrasi berhasil');

        }
        
    }).catch(err => {

        console.log('err =>', err);
        response.res500(res);

    });
}

exports.getUserList = (req,res) => {
    
    user.findAll().then(result => {

        if(result.length > 0){

            response.res200(res, result);

        }else{

            response.res404(res, 'Member tidak ditemukan');

        }

    }).catch(err => {

        console.log('err', err);
        response.res500(res);

    });

}