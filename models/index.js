const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {
    mongoose,
    customer: require("./models").customer,
    order: require("./models").order,
    product: require("./models").product
};

const init = () => {
    const config = require("../config/store");

    const Customer = db.customer;

    const Order = db.order;

    const Product = db.product;

    console.log("🔌 Starting connection to database.");

    return db.mongoose
        .connect(config.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            Order.deleteMany().then(() => {});

            Customer.deleteMany().then(() => {
                new Customer(config.user).save();
            });

            Product.deleteMany().then(() => {
                Product.insertMany(config.products);
            });

            console.log("🔌 Connected & populated initial data.");
        })
        .catch(e => {
            console.log(e);
            throw Error("❌ Error connecting to database.");
        });
};

module.exports = {
    db,
    init
};
