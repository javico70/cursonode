
var http = require("http");
var fs = require("fs");

    http.createServer(function (req, resp) {
        fs.readFile("./index.html",function (err,html){
            for(var i=0;i < 10; i++){
                resp.write(i + " ");
            };
            resp.end();
        });
        /*fs.readFile("./index.html",function (err,html) {
            resp.write(html);
            resp.end();
        });*/
    }).listen(8080);