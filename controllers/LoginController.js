userModel = require('../models/UserModel');
profileController = require('./ProfileController');

exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = userModel.getemail(email);
    user.then((rows, err) => {
        if(rows[0][0] && rows[0][0]['password'] === password){
            req.session.user = rows[0][0];
            res.redirect('/home')
        } else {
            res.redirect('/')
        }
    })

};

exports.logout = (req, res) => {
    req.session.user = undefined;
    res.redirect('/')
};

exports.register = (req, res) => {
    let email = req.body.email;
    user = userModel.getemail(email);
    user.then((rows, err) => {
        if(rows[0].length === 0) {
            profileController.createProfile(req, res);
            res.render("RegistrationView");
        } else {
            res.redirect('/')
        }
    });
};