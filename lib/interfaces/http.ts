import express from 'express'
import compression from 'compression'
import cors from 'cors'

import heyRouter from 'hey/router'
import userRouter from 'users/router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.use('/v1/hey', heyRouter)
app.use('/v1/users', userRouter)

export default app
