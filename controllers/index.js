const path = require('path');

exports.getHome = (req, res) => {
    res.sendFile('index.html',  {root: './public'} );
};

exports.getItem = (req, res) => {
    res.sendFile('produit.html',  {root: './public'} );
};

exports.getCart = (req, res) => {
    res.sendFile('panier.html',  {root: './public'} );
};

exports.getOrder = (req, res) => {
    res.sendFile('commande.html',  {root: './public'} );
};