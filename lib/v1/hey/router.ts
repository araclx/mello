import express from 'express'
import { requestHello, returnHello } from './controller'

const helloRouter = express.Router()

helloRouter.get('/', returnHello)
helloRouter.post('/', requestHello)

export default helloRouter
