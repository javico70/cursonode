
var http = require("http"),
    fs = require("fs");

    http.createServer(function (req,resp) {
        fs.readFile("./index.html",function (err,html) {
            resp.write(html);
            resp.end();
        });
    }).listen(8080);
