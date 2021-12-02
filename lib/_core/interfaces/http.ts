import express from 'express'
import compression from 'compression'
import cors from 'cors'
import session from 'express-session'

import heyRouter, { defaultRouter } from 'hey/router'
import { UserService } from 'users/service'
import { AuthService } from '_core/security/service'

import { sessionConfig } from '_utils/config'
import passport from '_core/security/passport'

/* In case of Auth0 usage we're supposed to use these imports.

import { auth, requiresAuth } from 'express-openid-connect'
import { AUTH0_CONFIG } from 'utils/env'

And implementation of Auth0 by following lines.

app.use('/v1/users', requiresAuth(), userRouter)*
app.use('/v2/auth', v2AuthRouter)

*/

export class HTTPinterface {
	public app: express.Application

	constructor() {
		this.app = express()
		this.middleware()
		this.security()
		this.routes()
	}

	private middleware() {
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(compression())
		this.app.use(cors())
		this.app.disable('x-powered-by')
	}

	private security() {
		this.app.use(session(sessionConfig))
		this.app.use(passport.initialize())
		this.app.use(passport.session())
	}

	private routes() {
		this.app.use('/', defaultRouter)
		this.app.use('/v1/hey', heyRouter)
		this.app.use('/v1/users', new UserService().router)
		this.app.use('/v1/auth', new AuthService().router)
	}
}
