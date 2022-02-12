const express = require('express');
const fs = require('fs');

let router = express.Router();

/***
 *  router base index backend
 */
router.get('/', function (req, res, next) {
    let data = fs.readFileSync('./version', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data.replace(/\r|\n/g, '<br/>'));
    res.end();
});


module.exports = router;
