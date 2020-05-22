const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const config = require("../config/auth");

const db = require("../models").db;

const Customer = db.customer;

const signin = (req, res) => {
    Customer.findOne({
        username: req.body.username
    }).exec((err, user) => {
        const message = "Invalid username or password.";

        if (!user) {
            return res.status(404).json({ message });
        }

        const validPass = bcrypt.compareSync(req.body.password, user.password);

        if (!validPass) {
            return res.status(401).json({ accessToken: null, message });
        }

        const token = jwt.sign({ id: user.id }, config.secret);

        res.json({
            username: user.username,
            accessToken: token
        });
    });
};

module.exports = {
    signin
};
