const path = require('path');

exports.getHome = (req, res) => {
    res.sendFile('index.html',  {root: './public'} );
};

exports.getItem = (req, res) => {
    res.sendFile('produit.html',  {root: './public'} );
};