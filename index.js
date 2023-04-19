const express = require('express')
const app = express()
const port = 3001

app.get('/route1', function (req, res)  {
  res.send('Hello World!')
})

app.get('/route2', function (req, res)  {
  res.send('Hello World from Route2!')
})

app.get('/chat', function (req, res)  {
  res.send('<html><body><h1 style="color : red">Chat</h1></body></html>')
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})