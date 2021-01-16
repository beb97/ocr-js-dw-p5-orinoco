const path = require('path');

exports.getHome = (req, res) => {
    res.sendFile('index.html',  {root: './public'} );
};

exports.getItem = (req, res) => {
    res.sendFile('product.html',  {root: './public'} );
};

exports.getCart = (req, res) => {
    res.sendFile('cart.html',  {root: './public'} );
};

exports.getOrder = (req, res) => {
    res.sendFile('order.html',  {root: './public'} );
};