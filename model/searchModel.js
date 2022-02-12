const axios = require('axios');

const url_meli = process.env.URL_MELI;
let itemsProduct = {};

/***
 *
 * @param word
 * @returns {Promise<itemsProduct>}
 */
const getListProductsMeli = async (word) => {
    if (typeof itemsProduct[word] !== 'undefined' && itemsProduct[word].length > 0) {
        return new Promise(
            function (resolve, reject) {
                resolve(itemsProduct[word]);
                reject(new Error('Bug querying list items products'));
            }
        )
    } else {
        return await axios({
            method: "get",
            url: `${url_meli}/sites/MLA/search?q=${word}`,
            responseType: "json"
        }).then(res => {
            itemsProduct[word] = res.data;
            return res.data;
        }).catch(err => {
            console.error(`debug http axios ${err}`);
            return err.response.data;
        });
    }
}

module.exports = {
    getListProductsMeli
}