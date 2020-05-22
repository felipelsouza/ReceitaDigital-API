const express = require("express")
const routes = require('./routes')

require('./database')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8080)
// app.listen(8080, '198.50.130.238')