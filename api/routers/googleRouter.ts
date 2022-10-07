import { Request, Response } from 'express'
const router = require('express').Router()

module.exports = () => {
  router.get('/helloworld', (request: Request, response: Response) => {
    response.send('Hello World!')
  })

  return router
}
