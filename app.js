/**
 * Created by huiliang on 2019/3/17.
 */
const http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello world')
}).listen(8082)

console.log('server is running on hhhh')