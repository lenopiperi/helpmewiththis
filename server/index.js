const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 4000

const db = require('./db')
const taskRouter = require('./routes/router')



app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('server for api')
})

app.use('/api', taskRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))