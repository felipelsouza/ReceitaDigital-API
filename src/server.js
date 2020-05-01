const express = require("express")
const routes = require('./routes')

require('./database')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)
//app.listen(80, '198.50.130.238')