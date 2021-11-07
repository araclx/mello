import express from 'express'
import { createNewUser } from './controller'

const userRouter = express.Router()

userRouter.post('/', createNewUser)

export default userRouter
