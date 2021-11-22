import express from 'express'
import compression from 'compression'
import cors from 'cors'

import heyRouter, { defaultRouter } from 'hey/router'
import userRouter from 'users/router'
import v2AuthRouter from 'auth/router.v2'

import { auth } from 'express-openid-connect'
import { AUTH0_CONFIG } from 'utils/env'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.use(auth(AUTH0_CONFIG))

app.use('/', defaultRouter)
app.use('/v1/hey', heyRouter)
app.use('/v1/users', userRouter)
app.use('/v2/auth', v2AuthRouter)

export default app
