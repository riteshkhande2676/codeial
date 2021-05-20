// set up the express
const express = require('express');
const app = express();

// create  the port
const PORT = 3000;

// SET UP THE VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', './views');

// router attached
app.use('/', require('./routes/index'));

// server running 
app.listen(PORT, function(err) {
    if (err)
        console.log('error is there ${error}');

    console.log(`server is running at ${PORT}`);
});