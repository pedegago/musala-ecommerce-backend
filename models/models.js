const mongoose = require("mongoose");

const customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        username: String,
        password: String
    })
);

const product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: String,
        url: String,
        bestseller: Boolean,
        on_sale: Boolean,
        description: String,
        price: Number,
        image: String
    })
);

const order = mongoose.model(
    "Order",
    new mongoose.Schema(
        {
            email: String,
            fullname: String,
            address: String,
            state: String,
            city: String,
            zip: String,
            products: [
                {
                    type: mongoose.ObjectId,
                    ref: "Product"
                }
            ]
        },
        { timestamps: true }
    )
);

module.exports = { customer, product, order };
