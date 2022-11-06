const express = require('express')
const app = express()
const port = 3232

app.get('/api', (req, res) => {
  res.send('This API endpoint may be used later...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})