import express from 'express'
import { UserController } from './controller'

const router = express.Router()
const userController = new UserController()

router.use('/', userController.getAll)

export default router
