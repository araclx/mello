import express from 'express'
import compression from 'compression'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'

import heyRouter, { defaultRouter } from 'hey/router'
import userRouter from 'users/router'
import v2AuthRouter from 'auth/router.v2'
import v1AuthRouter from 'auth/router.v1'

// import { auth } from 'express-openid-connect'
// import { AUTH0_CONFIG } from 'utils/env'
import { sessionConfig } from '../utils/config'
import { localstrategy } from '../auth/passport'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.use(session(sessionConfig))

passport.use('local', localstrategy)
app.use(passport.initialize())
app.use(passport.session())

// app.use(auth(AUTH0_CONFIG))

app.use('/', defaultRouter)
app.use('/v1/hey', heyRouter)
app.use('/v1/users', userRouter)
app.use('/v1/auth', v1AuthRouter)
// app.use('/v2/auth', v2AuthRouter)

export default app
