const Mdb = require('./mdb.service')
const tabla = "mascotas"
const razas = "razas"
const tipoMascotas = "tipomascotas"
const Mascotas = {
    nuevo: async function (mascotas){
        const sql = `
            INSERT INTO ${tabla} (nombre, idTipo, idraza, edad, pais, ciudad)
            VALUES (?, ?, ?, ?, ?, ?)
        `
        return Mdb.query(sql, [mascotas.nombre, mascotas.idTipo, mascotas.idraza, mascotas.edad, mascotas.pais, mascotas.ciudad])
    },
    eliminar: async function (id){
        const sql = `
            DELETE FROM ${tabla} WHERE id = ?
        `
        return Mdb.query(sql, [id])
    },
    todos: async function (){
        const sql = `
            SELECT 
            ${tabla}.nombre, 
            ${tabla}.edad,
            ${tabla}.pais,
            ${tabla}.ciudad,
            ${razas}.raza,
            ${tipoMascotas}.tipo

            FROM ${tabla}

            JOIN ${tipoMascotas} ON ${tipoMascotas}.id = ${tabla}.idTipo
            JOIN ${razas} ON ${razas}.id = ${tabla}.idraza
 
            `
        return Mdb.query(sql, [])
    },
    obtenerId: async function (mascotas){
        const sql = `
        SELECT FROM ${tabla} WHERE id = ?
    `
    return Mdb.query(sql, [mascotas.id])
    },
    actualizar: async function (mascotas){
        const sql = `
            UPDATE ${tabla} SET
                nombre = ?,
                idTipo = ?,
                idraza = ?, 
                edad = ?, 
                pais = ?, 
                ciudad = ? 
                WHERE id = ?
        `
        return Mdb.query(sql, [mascotas.nombre, mascotas.idTipo, mascotas.idraza, mascotas.edad, mascotas.pais, mascotas.ciudad, mascotas.id])
    },


}
module.exports = Mascotas