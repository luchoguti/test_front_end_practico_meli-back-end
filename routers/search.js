/***
 * router search list products Mercado Libre
 */
const express = require('express');
const {getListProductsMeli} = require("../model/searchModel");
let router = express.Router();

router.get('/search',  function (req, res, next) {
    try {
        let word_search = ':query';
        if(typeof req.query.query !== 'undefined' && req.query.query != ''){
            word_search = req.query.query;
        }
        getListProductsMeli(word_search).then(response =>{
            res.send(response);
        });
    }catch (err){
        console.log('There was an unhandled error in calls: ', err);
        next(err);
    }
});

module.exports = router;