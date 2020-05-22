const jwt = require("jsonwebtoken");

const config = require("../config/auth");

const header = (req, res, next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );

    next();
};

const verify = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({ message: "No token provided." });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Not authorized." });
        }

        next();
    });
};

module.exports = {
    header,
    verify
};
