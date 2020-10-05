const http = require('http')

const server = http.createServer((request, response) => { //ojo en la posicion
    console.log('petición entrante -----' + request.url)

    if (request.url === "/hola"){
        response.write('hola koder')
    } else if(request.url === "/adios"){
        response.write('hasta la vista babe')
    } else {

    response.write('Hola desde node')
    response.end()
    }
})

server.listen(8080, () => {
    console.log('El servidor esta escuchando en el puerto 8080')
})