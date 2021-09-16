const express = require ('express');
const {connect} = require ('./src/db/db');
const colorRoutes = require('./src/routes/color.route')

const PORT = 3000;
const server = express();

connect();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});




//Json en el body
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

//Expone la carpeta public


//Rutas
server.use('/colors', colorRoutes)

//Error ruta desconocida
server.use("*", (req, res) => {
    const error = new Error("Error, ruta desconocida")
    error.status = 404;
    return res.status(404).json(error)
});

//Control Errores
server.use((error, req, res, next) => {
    console.log(error);
    return res.status(error.status || 500).json(error.message || "Unexpected error")
});

server.disable('x-powered-by');

server.listen(PORT, () => {
    console.log (`Listenen in port: ${PORT}`);
    }
);

