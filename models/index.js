const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.customer = require("./models").customer;

db.order = require("./models").order;

db.product = require("./models").product;

const init = () => {
    const config = require("./config/db");

    const Customer = db.customer;

    const Order = db.order;

    const Product = db.product;

    db.mongoose
        .connect(
            `mongodb://${config.db.HOST}:${config.db.PORT}/${config.db.DB}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )
        .then(() => {
            Customer.deleteMany({});

            Order.deleteMany({});

            Product.deleteMany({});

            new Customer(config.user).save();

            new Product(config.products).save();

            console.log("🔌 Connected & populated initial data.");
        });
};

module.exports = {
    db,
    init
};
