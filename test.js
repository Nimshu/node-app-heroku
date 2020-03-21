const express = require('express');
const app = express();

app.get('/', function (req, res)  {
   res.send('Hello World');
})

const PORT = process.env.PORT;
app.listen (PORT , () => console.log('listening on port 3000'));
