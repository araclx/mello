import express from 'express'
import { UserController } from './controller'

const router = express.Router()
const userController = new UserController()

router.get('/', userController.getAll)
router.get('/:username', userController.getOne)
router.post('/', userController.createNew)

export default router
