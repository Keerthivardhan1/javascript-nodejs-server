import app from 'express';

let http = require('http').Server(app);

http.listen(3000 , function () {
    console.log('Server is running on port 3000');
})