const conn = require('../database/db');
const { hasingData, compareHash } = require('../utils/hashing')

module.exports = {
    saveUser: async function (req, res) {
        const hashPassword = await hasingData(req.body.password);
        conn.query('INSERT INTO users SET ? ', [{
            'names': req.body.names,
            'email': req.body.email,
            'rol': req.body.rol,
            'password': hashPassword
        }], (err, results, fields)=>{
            if (err) {
                console.log(err);
                res.status(400).send(err.sqlMessage);
            } else {
                if (results.affectedRows === 0) {
                    res.status(500).send('Usuario ya se encuentra registrado o se esta haciendo mal la peticion')
                } else {
                    res.status(200).redirect('/');
                }
            }
        });
    }
};