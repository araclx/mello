import express from 'express'
import compression from 'compression'
import cors from 'cors'
import session from 'express-session'

import heyRouter, { defaultRouter } from 'hey/router'
import userRouter from 'users/router'
import v1AuthRouter from 'auth/router.v1'

/* In case of Auth0 usage we're supposed to use these imports.

import { auth, requiresAuth } from 'express-openid-connect'
import { AUTH0_CONFIG } from 'utils/env'

And implementation of Auth0 by following lines.

app.use('/v1/users', requiresAuth(), userRouter)*
app.use('/v2/auth', v2AuthRouter)

*/

import { sessionConfig } from 'utils/config'
import passport from 'auth/passport'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.use(session(sessionConfig))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', defaultRouter)
app.use('/v1/hey', heyRouter)
app.use('/v1/users', userRouter)
app.use('/v1/auth', v1AuthRouter)

export default app
