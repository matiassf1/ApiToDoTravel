
const express = require('express')
const app = express()

app.use(express.json());



// const app = http.createServer((request, response) => {
//     response.writeHead( 200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(clientes))
// })



// app.delete('/api/clients/:id', (request, response) => {
//     const id = Number(request.params.id)
//     clientes = clientes.filter(client => client.id !== id)
//     response.status(204).end()
// })

// app.post('/api/clients', (request, response) => {
//     const client = request.body

//     if(!client || !client.empresa){
//         return response.status(400).json({
//             error: 'client.empresa is missing'
//         })
//     } 

//     const ids = clientes.map(client => client.id);
//     const maxIds = Math.max(...ids)


//     const newClient = {
//         nombre: client.nombre,
//         empresa: client.empresa,
//         email: client.email,
//         telefono: client.telefono,
//         notas: client.notas ? client.notas : '',
//         id: maxIds + 1,

//     }

//     clientes = [...clientes, newClient]
//     response.json(newClient)
// })

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})