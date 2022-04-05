console.log('May Node be with you');
const express = require('express');
const app = express();
app.listen(3000, function() {
    console.log('listening on 3000');
});

  // We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', function (req, res) {
    // do something here
})
app.get('/', function(req, res) {
    res.send('Hello World')
})
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})