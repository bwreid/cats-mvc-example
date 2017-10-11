const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: 'OK' })
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
