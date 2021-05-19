const express = require('express');
const app = express();

const PORT = 3000;


app.listen(PORT, function(err) {
    if (err)
        console.log('error is there ${error}');

    console.log(`server is running at ${PORT}`);
});