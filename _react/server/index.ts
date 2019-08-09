import * as express from 'express';

const app = express();

app.get('/jsonp', (req, res) => {
    const callbackName = req.query.callback;
    const mockData = {
      name: 'MrErHu',
    };
    res.send(`${callbackName}(${JSON.stringify(mockData)})`);
});

app.get('/cors', (req, res) => {
    const origin = req.get('origin');
    res.set('Access-Control-Allow-Origin', origin);
    // res.set('Expires', 'Wed, 11 May 2020 07:20:00 GMT');
    // res.set('Cache-Control', 'public, max-age=100000');
    res.download('./server/test.json');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
