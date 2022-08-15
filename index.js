const express = require('express');
const { ciudades } = require('./data/ciudades');
const app = express()

app.use(express.json());


app.get('/api/ciudades', (request, response) => {
    response.json(ciudades);
})
app.get('/api/ciudades/:id', (request, response) => {
    const id = Number(request.params.id)
    const ciudad = ciudades.find(ciudad => ciudad.id === id)
    ciudad && response.send(ciudad)

    !ciudad && response.status(404).end()
})

app.post('/api/ciudades', (request, response) => {
    const newCity = request.body;
    console.log(newCity);

    response.json({'message' : 'Ciudad agregada!'});
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
