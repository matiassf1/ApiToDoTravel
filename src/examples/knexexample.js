
// const databaseServices = () => {
//     const knex = require('knex')({
//         client : 'mysql',
//         connection: {
//             host: process.env.DB_HOST,
//             port: 3306,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASS,
//             database: process.env.DB
//         }
//     });

//     const table = 'ciudades';
    
//     const crearCiudad = (nombre, pais, continente, ciudadCostera, atractivos, idioma) => {

//         return knex(table).insert({
//             nombre,
//             pais,
//             continente,
//             ciudadCostera,
//             atractivos,
//             idioma
//         }); // retorna una promesa
//     }

//     return {
//         crearCiudad
//     }
// }

// module.exports = {
//     databaseServices
// }
