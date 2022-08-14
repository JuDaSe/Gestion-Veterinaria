const Mdb = require('./mdb.service')
const tabla = "razas"
const Razas = {
    nuevo: async function (razas){
        const sql = `
            INSERT INTO ${tabla} (raza)
            VALUES (?)
        `
        return Mdb.query(sql, [razas.raza])
    },
    todos: async function (){
         const sql = `
             SELECT * FROM ${tabla} 
         `
    return Mdb.query(sql, [])
    },
    eliminar: async function (id){
        const sql = `
            DELETE FROM ${tabla} WHERE id = ?
        `
        return Mdb.query(sql, [id])
    }
}
module.exports = Razas