const express = require('express')
const app = express()
const port = 3000
// giong ResquetsMapping trong Spring MVC( truyền địa chỉ vào '\' vd: '\tintuc\devleo')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})