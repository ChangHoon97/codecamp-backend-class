//const express = require('express') 옛날방식 ==> commonjs
import express from 'express'   //요즘방식 ==> module

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World이창훈임')
})

app.listen(3000)  //3000은 포트번호