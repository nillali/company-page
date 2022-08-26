const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static('public'))

app.listen(PORT, console.log(`Listening on port ${PORT}`))