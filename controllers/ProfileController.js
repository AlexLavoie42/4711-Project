let userModel = require('../models/UserModel');

exports.editProfile = (req, res) => {
    let image = req.body.dp;
    let bio = req.body.bio;
    let country = req.body.country;
    let dob = req.body.dob;

    res.redirect("/home")
};

exports.getProfile = (req, res) => {
    profile = userModel.getuser(req.params['id']);
    profile.then((rows, err) => {
        res.render('ProfileView', rows[0])
    });
};

exports.createProfile = (req, res) => {
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