const conn = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 8;

module.exports = {
    saveUser: async function (req, res) {
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        conn.query('INSERT INTO users SET ? ', [{
            'names': req.body.names,
            'email': req.body.email,
            'rol': req.body.rol,
            'password': hashPassword
        }], (err, results, fields)=>{
            if (err) {
                console.log(err);
                res.status(500).send(err.sqlMessage);
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