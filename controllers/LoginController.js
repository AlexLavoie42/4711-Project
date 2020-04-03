userModel = require('../models/UserModel')

exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
};

exports.logout = (req, res) => {

};

exports.register = (req, res) => {
    let email = req.body.email;
    let f_name = req.body.first_name;
    let l_name = req.body.last_name;
    let pass = req.body.password;
    let image = req.body.dp;
    let bio = req.body.bio;
    let country = req.body.country;
    let dob = req.body.dob;

    userModel.add({email: email, first_name: f_name, last_name: l_name, password: pass,
                        image_url: image, desc: bio, country: country, birthdate: dob})
};