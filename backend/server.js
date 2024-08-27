const http = require('http');
const fs = require('fs');
const path = require('path');
const portaDeEntrada = process.env.PORT || 3000;



const servidor = http.createServer((pedido, resposta) => {
    if (pedido.url === '/') {
        fs.readFile(__dirname + 'carlos/index.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/carlos/main.css') {
        fs.readFile(__dirname + 'carlos/main.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/carlos/script.js') {
        fs.readFile(__dirname + 'carlos/script.js', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/js' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    //---------------------------------------------------------------------------------------------
    if (pedido.url === '/mangas') {
        fs.readFile(__dirname + 'frontend/view/mangas.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/filmes') {
        fs.readFile(__dirname + 'frontend/view/filmes.html', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/html' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/index.css') {
        fs.readFile(__dirname + 'frontend/view/css/index.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/mangas.css') {
        fs.readFile(__dirname + 'frontend/view/css/mangas.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/css/filmes.css') {
        fs.readFile(__dirname + 'frontend/view/css/filmes.css', (erro, dadosDoArquivo) => {
            if (erro) {
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
    if (pedido.url === '/database/listaDeAnimes.json') {
        fs.readFile(__dirname + 'database/listaDeAnimes.json', (erro, dadosDoArquivo) => {
            if (erro) {
                console.log(erro)
                resposta.writeHead(500, { 'Content-Type': 'text/plain' });
                resposta.end('Erro no servidor!');
                return;
            }
            resposta.writeHead(200, { 'Content-Type': 'text/css' });
            resposta.end(dadosDoArquivo);
            return
        })
    }
});

servidor.listen(portaDeEntrada, '0.0.0.0');