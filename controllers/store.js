const db = require("../models").db;

const Order = db.order;

const Product = db.product;

const orders = (req, res) => {
    Order.find({ email: req.query.customer }).then(items => {
        res.json(items);
    });
};

const addOrder = (req, res) => {
    new Order(req.body).save((e, order) => {
        if (e) {
            res.status(500).json({ message: e });

            return;
        }

        res.status(201).json(order._id);
    });
};

const products = (req, res) => {
    Product.find().then(items => {
        res.json(items);
    });
};

module.exports = {
    orders,
    addOrder,
    products
};
