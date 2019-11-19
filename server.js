const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();
const app = express();
const fs = require('fs');
const Axios = require('axios');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
    console.log(process.env.TOKEN)
 return res.send('pong');
});

app.get('/api/save/test', (req, res)=>{
    if(!fs.existsSync('.env')){
    fs.writeFile('.env', 'test=test', err=>{
        if(err) throw err
        console.log('file has been saved')
        });
    res.send('.env saved test');
    }
})

app.get('/api/git/test', (req, res)=>{
    Axios.get('https://api.github.com' , {
        headers: {
            'user-agent': 'request',
            Authorization: 'token ' + process.env.TOKEN //the token is a variable which holds the token
          }
    })
    .then(console.log)
    .catch(console.log)
})

app.get('/api/save/namepass', (req, res)=>{
    console.log(req.query)
    fs.writeFile('.env', `NAME=${req.query.user} PASSWORD=${req.query.pass}`, err=>{
        if(err) throw err
        console.log('file has been saved')
        });
    res.send('.env saved test');
})


app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Server is listening on port ${process.env.PORT || 8080}`)
});