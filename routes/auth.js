const controllers = require("../controllers/auth");

const routes = app => {
    app.post("/api/signin", controllers.signin);
};

module.exports = {
    routes
};
