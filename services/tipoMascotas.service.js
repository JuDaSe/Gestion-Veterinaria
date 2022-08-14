const Mdb = require('./mdb.service')
const tabla = "tipomascotas"
const tipoMascotas = {
    nuevo: async function (tipomascotas){
        const sql = `
            INSERT INTO ${tabla} (tipo)
            VALUES (?)
        `
        return Mdb.query(sql, [tipomascotas.tipo])
    },
    eliminar: async function (id){
        const sql = `
            DELETE FROM ${tabla} WHERE id = ?
        `
        return Mdb.query(sql, [id])
    }
}
module.exports = tipoMascotas