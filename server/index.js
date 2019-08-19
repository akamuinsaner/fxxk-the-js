const server = require('./server');

const app = server();

app.listen(8888, () => {
    console.log('server start')
})