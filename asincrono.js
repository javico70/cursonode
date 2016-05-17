var http = require("http");

var fs = require("fs");

    fs.readFile("./index.html",function(err,html){
        http.createServer(function (req,resp) {
            resp.write(html);
            resp.end();
        }).listen(8080);
    });

