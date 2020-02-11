const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();
const app = express();
const fs = require('fs');
const Axios = require('axios');
const { spawn } = require('child_process');

const pwd = spawn('pwd');


pwd.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
  
  pwd.stderr.on('data', function (data) {
    console.error('stderr: ' + data);
  });
  
  pwd.on('close', function (code) {
    console.log(`child process exited with ${code}`)});