const express = require('express');
const {getProductMeli, getDescriptionProductMeli} = require("../model/itemModel");
let router = express.Router();

/***
 * router information specific product the Mercado Libre
 */
router.get('/items/:id', function (req, res, next) {
    try {
        getProductMeli(req.params.id).then(response=>{
            res.send(response);
        })
    } catch (err) {
        console.log('There was an unhandled error in calls: ', err);
        next(err);
    }
});
/***
 * router description product the Mercado Libre
 */
router.get('/items/:id/description', function (req, res, next) {
    try {
        getDescriptionProductMeli(req.params.id).then(response=>{
            res.send(response);
        })
    } catch (err) {
        console.log('There was an unhandled error in calls: ', err);
        next(err);
    }
});
module.exports = router;
