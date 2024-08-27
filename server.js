const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const express = require('express')

dotenv.config()
// rest objects 
const app = express()

// port
const port = process.env.port

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// listen server
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 