///<reference path="..\references\node.d.ts"/>
import http = module("http");

function handler(req: http.ServerRequest, res: http.ServerResponse) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>hi</h1>");
}

var server = http.createServer(handler);

console.log("listening...:");
server.listen(5000);

