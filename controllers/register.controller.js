const conn = require('../database/db');

module.exports = {
    saveRegister: function (req, res) {
        const user = req.body;
        console.log(user);
        res.send('Capturando datos del body ' + JSON.stringify(user))
    }
};