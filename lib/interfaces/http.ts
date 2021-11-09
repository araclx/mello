import express from 'express'
import compression from 'compression'
import cors from 'cors'

import v1heyRouter from '../hey/v1/router'
import v1userRouter from '../users/v1/router'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.use('/v1/hey', v1heyRouter)
app.use('/v1/users', v1userRouter)

export default app
