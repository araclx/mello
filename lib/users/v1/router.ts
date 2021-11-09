import express from 'express'
import { createNewUser, getAllUsers } from './controller'

const userRouter = express.Router()

userRouter.post('/', createNewUser)
userRouter.get('/', getAllUsers)

export default userRouter
