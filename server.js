const express = require('express')
const app = express()
const port = 3000
const jsxEngine = require('jsx-view-engine')

app.get('/new', (req, res)=>{
    res.render('new')
})