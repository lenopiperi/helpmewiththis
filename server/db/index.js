const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/helpmewiththis', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>console.log('DB connected'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db