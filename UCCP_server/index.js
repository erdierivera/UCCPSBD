const express = require('express')
//const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const memberRouter = require('./routes/member-router')
const organizationRouter = require('./routes/organization-router')
const membershipTypeRouter = require('./routes/membershiptype-router')

const app = express()
const apiPort = 3000

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded());
app.use(cors());
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/cors', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
    
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', memberRouter)
app.use('/api', organizationRouter)
app.use('/api', membershipTypeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))