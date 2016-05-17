var http = require("http");
var fs = require("fs");

var html = fs.readFileSync("./index.html");


 http.createServer(function (req,resp) {
    resp.write(html);
    resp.end();
 }).listen(8080);