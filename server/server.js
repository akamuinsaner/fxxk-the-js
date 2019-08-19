const http = require('http');

const startServer = () => {
    const app = http.createServer((req, res) => {
        res.end('11111111111')
    });
    return app;
}

module.exports = startServer;
