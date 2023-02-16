const express = require('express')
//const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('C:\\Project\\UCCPSBD\\UCCP_server\\db')
const memberRouter = require('C:\\Project\\UCCPSBD\\UCCP_server\\routes\\member-router.js')
const membershipTypeRouter = require('C:\\Project\\UCCPSBD\\UCCP_server\\routes\\membershiptype-router.js')
const organizationRouter = require('C:\\Project\\UCCPSBD\\UCCP_server\\routes\\organization-router.js')

const app = express()
const apiPort = process.env.PORT;

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded());
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', memberRouter)
app.use('/api', organizationRouter)
app.use('/api', membershipTypeRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))