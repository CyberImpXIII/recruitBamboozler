const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const env = require('dotenv').config();
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/api/save', (req, res)=>{
    fs.write('.env', 'test="test"');
    res.send('.env saved test');
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server is listening on port ${process.env.PORT || 8080}`)
});