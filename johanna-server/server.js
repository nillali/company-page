const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Testing mocha')
});

app.listen(3003);