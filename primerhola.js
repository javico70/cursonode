var http = require("http");

var manejador = function (solicitud,respuesta) {
    console.log("Por log va a salir: HOla mundo");
    respuesta.end(" Se envía respuesta al servidor");
};

var servidor = http.createServer(manejador);

    servidor.listen(8080);