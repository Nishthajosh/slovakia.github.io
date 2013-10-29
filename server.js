var connect = require('connect');
console.log('browse localhost:4001');
connect.createServer(
    connect.static(__dirname)
).listen(4001);