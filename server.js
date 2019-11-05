const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const env = require('dotenv').config();
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/api/save/test', (req, res)=>{
    fs.writeFile('.env', 'test="test"', err=>{
        if(err) throw err
        console.log('file has been saved')
        });
    res.send('.env saved test');
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server is listening on port ${process.env.PORT || 8080}`)
});