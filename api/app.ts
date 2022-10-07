import express from 'express'

const app = express()
const port = 3000

const googleRouter = require('./routers/googleRouter')()

app.use(googleRouter)

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`)
})
