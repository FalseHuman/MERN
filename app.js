const express = require('express')

const config = require('config')
const mongoose = require('mongoose')

const app = express()
//var func = '/api/auth'
app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link-rout'))

const PORT = config.get('port') || 5000

async function start() {
    try{
       await mongoose.connect(config.get ('mongoUri'), {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true
       })
       app.listen(PORT, () => console.log('App worked port on ' + PORT))
    } catch (e){
        console.log('Server Error', e.message)
        process.exit(code, 1)
    }
}

start()

