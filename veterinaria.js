const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')

const app     = express()
const port    = 3000


const VetRoutes    = require('./routes/veterinaria.routes')

app.use(cors())
app.use(bodyParser.json())

// Tienda
app.use('/veterinaria', VetRoutes)

app.listen(port, (req, res) => {
    console.log("WEBSERVER ::: ", port)
})