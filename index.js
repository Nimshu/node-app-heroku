const express = require('express');
const http =  require('http');

const app = express();
const server = http.Server(app);

app.get('/', function (req, res)  {
   res.send('Hello World');
})

const PORT = process.env.PORT || 8000;
server.listen(PORT,function(){
   console.log("listening to port ",PORT);
})