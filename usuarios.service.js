const Mdb = require('./mdb.service')
const jwt = require('jsonwebtoken')
const KEY = '123'
const tabla = "usuarios"
const Usuario = {
    auth: async function (usuario){
        const sql = `
            SELECT id, usuario, tipo FROM ${tabla} 
            WHERE usuario = ? AND clave = MD5(?) AND activo = 1
        `
        // Generar el token dentro del servicio de autenticacion
        const arrUsuario = await Mdb.query(sql, [usuario.usuario, usuario.clave])
        let usr
        // El usuario es correcto
        if(arrUsuario.length > 0){
            usr = arrUsuario[0]
            let tmpUsr = {...usr}
            let token = jwt.sign(tmpUsr, KEY)
            // Al token que firmamos a partir del usuario que encontramos en la DB
            usr.token = token
        }

        return usr ? usr : []
    },
    nuevo: async function (usuario){
        const sql = `
            INSERT INTO ${tabla} (usuario, clave, tipo, activo)
            VALUES (?, ?, ?, ?)
        `
        return Mdb.query(sql, [usuario.usuario, usuario.clave, usuario.tipo, usuario.activo])
    },
    actualizar: async function (usuario){
        const sql = `
        UPDATE ${tabla} SET
        usuario = ?,
        clave = ?,
        tipo = ?,
        activo = ?
        WHERE id = ?
    `
    return Mdb.query(sql, [usuario.usuario, usuario.clave, usuario.tipo, usuario.activo, usuario.id])
    },
    todos: async function (){
        const sql = `
            SELECT * FROM ${tabla} 
        `
        return Mdb.query(sql, [])
    },

}
module.exports = Usuario