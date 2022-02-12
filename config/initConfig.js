const PropertiesReader = require('properties-reader');


/***
 *  method start environment variable
 */
const initData = () => {
    if(process.env.PROPERTIES_LOCATION){
        let properties = PropertiesReader('./config.properties');
        let data = properties.getAllProperties();
        for (let field in data) {
            process.env[field] = data[field];
        }
    } else {
        console.log('Properties environment variable does not exist PROPERTIES_LOCATION');
    }
}

module.exports = {
    initData
}