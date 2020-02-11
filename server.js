const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();
const fs = require('fs');
const { exec } = require('child_process');

fs.writeFile('garbage', `${Math.random()}${Math.random()}${Math.random()}${Math.random()}${Math.random()}`, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    const pwd = exec('git status');
    pwd.stdout.on('data', function (data) {
        console.log('stdout: ' + data);
    });
  });