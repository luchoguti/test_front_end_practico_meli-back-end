const axios = require('axios');

const url_meli = process.env.URL_MELI;
let itemProduct = {};
/***
 *
 * @param id
 * @returns {Promise<itemProduct>}
 */
const getProductMeli = async (id) => {
    if (typeof itemProduct[id] !== 'undefined' && Object.entries(itemProduct[id]).length > 0) {
        return new Promise(
            function (resolve, reject) {
                resolve(itemProduct[id]);
                reject(new Error('Bug querying item product'));
            }
        )
    } else {
        return await axios({
            method: "get",
            url: `${url_meli}/items/${id}`,
            responseType: "json"
        }).then(res => {
            itemProduct[id] = res.data;
            return res.data;
        }).catch(err => {
            console.error(`debug http axios ${err}`);
            return err.response.data;
        });
    }
}

const getDescriptionProductMeli = async (id) => {
    if (typeof itemProduct[`${id}_description`] !== 'undefined' && Object.entries(itemProduct[`${id}_description`]).length > 0) {
        return new Promise(
            function (resolve, reject) {
                resolve(itemProduct[`${id}_description`]);
                reject(new Error('Bug querying item product'));
            }
        )
    } else {
        return await axios({
            method: "get",
            url: `${url_meli}/items/${id}/description`,
            responseType: "json"
        }).then(res => {
            itemProduct[`${id}_description`] = res.data;
            return res.data;
        }).catch(err => {
            console.error(`debug http axios ${err}`);
            return err.response.data;
        });
    }
}
module.exports = {
    getProductMeli,
    getDescriptionProductMeli
}