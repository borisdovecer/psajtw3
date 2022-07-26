const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

const register = async (req, res) => {
    const { username, password } = req.body;

    userModel.findOne({ username }).then(user => {
        if (user) {
            res.send({message: 'User exist'})
        } else {
            const newUser = new userModel({
                username,
                password,
                role: 'admin'
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.send({message: 'User created'});
                        })
                        .catch(err => console.log(err));
                });
            });
        }
    });
}

const getUser = async (req, res) => {
    if (req.user) {
        res.json(req.user);
    }
};

const logout = (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/');
    });
};

module.exports = {
    getUser,
    logout,
    register
}
