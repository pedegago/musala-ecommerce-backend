const middlewares = require("../middlewares/auth");

const controllers = require("../controllers/store");

const routes = app => {
    app.get("/api/orders", middlewares.verify, controllers.orders);

    app.post("/api/orders", controllers.addOrder);

    app.get("/api/products", controllers.products);
};

module.exports = {
    routes
};
