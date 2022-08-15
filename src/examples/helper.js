require('dotenv').config()

const express = require('express');

const { methods } = require('../controllers/city.controller');

const app = express()

app.use(express.json());

let ciudades = [
    {   id: 7,
        nombre: 'Barcelona', 
        pais: 'España',
        emoji: '🇪🇸',
        continente: 'Europe',
        ciudadCostera: true,
        atractivos: 'Vibrante vida en la ciudad, sus restaurantes, discos y bares, el arte y la arquitectura y sus 8 playas.',
        idioma: 'Catalan'
    },
    {   id: 8,
        nombre: 'Madrid', 
        pais: 'España',
        emoji: '🇪🇸',
        continente: 'Europe',
        ciudadCostera: false,
        atractivos: 'Una ciudad muy activa de noche, destacada por su herencia historica posee muchos museos y enclaves historicos.(La hermanastra de neme esta god y vive ahi)',
        idioma: 'Castellano'
    }, 
    {   id: 9,
        nombre: 'Niza', 
        pais: 'Francia',
        emoji: '🇫🇷',
        continente: 'Europe',
        ciudadCostera: true,
        atractivos: 'Niza es una de las ciudades costeras más pequeñas y lujosas del mundo.',
        idioma: 'Frances'
    }, 
    {   id: 0,
        nombre: 'Miami Beach', 
        pais: 'Estados Unidos',
        emoji: '🇺🇸',
        continente: 'North America',
        ciudadCostera: true,
        atractivos: 'Ciudad costera por excelencia, y cuenta con las mejores playas de los Estados Unidos. La vida noctura en esta ciudad destaca por sus bares y discotecas.',
        idioma: 'Ingles'
    },
    {   id: 1,
        nombre: 'Santa Mónica', 
        pais: 'Estados Unidos',
        emoji: '🇺🇸',
        continente: 'North America',
        ciudadCostera: true,
        atractivos: 'Una de las playas más divertidas de los Estados Unidos. Con un clima inmejorable es el destino de muchos viajeros.',
        idioma: 'Ingles'
    },
    {
        id: 2,
        nombre: 'Sídney', 
        pais: 'Australia',
        emoji: '🇦🇺',
        continente: 'Oceania',
        ciudadCostera: true,
        atractivos: 'A sólo 20 minutos del centro de la ciudad nos encontramos con playas de arena blanca y agua transparente donde el relax es la norma. Posee imponentes teatros y una impresionante arquitectura',
        idioma: 'Ingles'
    },  
    {
        id: 3,
        nombre: 'Paris', 
        pais: 'Francia',
        emoji: '🇫🇷',
        continente: 'Europe',
        ciudadCostera: false,
        atractivos: 'Una hermosa ciudad que resalta por sus ambientaciones luminicas y sus impresionantes figuras arquitectonicas. Posee una gran gastronomia',
        idioma: 'Frances'
    },  
    {
        id: 4,
        nombre: 'Londres', 
        pais: 'Inglaterra',
        emoji: '🇬🇧',
        continente: 'Europe',
        ciudadCostera: false,
        atractivos: 'Increible ciudad para visitar en verano, no posee buen clima el resto de estaciones.',
        idioma: 'Ingles'
    },
    {
        id: 5,
        nombre: 'Bruselas', 
        pais: 'Belgica',
        emoji: '🇧🇪',
        continente: 'Europe',
        ciudadCostera: false,
        atractivos: 'Ideal para pasar tu verano en Bruselas disfrutando de su cerveza, sus patatas fritas y sus mejillones. Posee increibles lugares como Grand Place, el Atomium, las instituciones europeas, la Ruta del Cómic y sus museos, claro…',
        idioma: 'Frances'
    },
    {   
        id: 6,
        nombre: 'Berlin', 
        pais: 'Alemania',
        emoji: '🇩🇪',
        continente: 'Europe',
        ciudadCostera: false,
        atractivos: 'Ideal para pasar tu verano en Bruselas disfrutando de su cerveza, sus patatas fritas y sus mejillones. Posee increibles lugares como Grand Place, el Atomium, las instituciones europeas, la Ruta del Cómic y sus museos, claro…',
        idioma: 'Aleman'
    },

  ]


app.get('/api/ciudades', (request, response) => {
    response.json(methods.getCiudades);
})

app.get('/api/ciudades/:id', (request, response) => {
    const id = Number(request.params.id)
    const ciudad = ciudades.find(ciudad => ciudad.id === id)
    ciudad && response.send(ciudad)

    !ciudad && response.status(404).end()
})

app.post('/api/ciudades', async(request, response) => {
    const newCity = request.body;
    // await databaseServices.crearCiudad(newCity);
    response.json({'message' : 'Ciudad agregada!'});
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})
