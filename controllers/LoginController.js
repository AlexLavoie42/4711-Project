userModel = require('../models/UserModel');
profileController = require('./ProfileController');

exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
};

exports.logout = (req, res) => {

};

exports.register = (req, res) => {
    profileController.createProfile(req, res)


};