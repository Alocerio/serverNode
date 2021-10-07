const http = require('http');
const cc = require('rgb-console');

const handleServer = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.write('<h1>Hello World</h1>');
    res.end();};


const server =  http.createServer(handleServer)

server.listen(3000, function(){
    cc.ok('Server is listening on port 3000');
});











/*

fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
        
    }else{
        console.log('archivo creado');
    } 
})
*/