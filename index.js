var express = require('express');
var port = 8080
var app = express()

app.use(express.static('./public'))
console.log(`[INFO] Código Carregado`)
app.listen(port, () => {
    console.log(`[INFO] Site aberto, 127.0.0.1:${port}`)
    const net = require('net');
    const client = net.connect({port: 80, host:"google.com"}, () => {
        console.log('[IP] '+client.localAddress+":8080");
    });
})