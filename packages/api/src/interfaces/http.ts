import express from 'express'
import compression from 'compression'
import cors from 'cors'
import signale from 'signale'
import getport from 'get-port'
import morgan from 'morgan'
import cfonts from 'cfonts'
import errorhandler from 'errorhandler'

import { ProfileService } from '../users/service'

import { HOST, isDevelopment, PORT } from '../utils/env'
import { authenticate } from '../middleware/authenticate'

export class httpInterface {
	public app: express.Application

	constructor() {
		this.app = express()
		this.middleware()
		this.routing()
		this.errorHandling()
	}

	/** Core function dedicated for running Node.js server on preffered port from .env,
	 * (specified in MELLO_PORT variable), otherwise if not specified server will fallback to 1337,
	 * if 1337 will be not available server will automatically find free port. */
	public async listen() {
		const appPORT = await getport({
			port: PORT,
		})
		this.app.listen(appPORT, () => {
			cfonts.say('Mello', {
				font: 'block',
				align: 'left',
			})
			signale.success(`Server listening on http://${HOST}:${appPORT}`)
		})
	}

	private middleware() {
		this.app.disable('x-powered-by')
		this.app.use(express.json())
		this.app.use(express.urlencoded({ extended: false }))
		this.app.use(cors())
		this.app.use(compression())
		if (isDevelopment) this.app.use(morgan('dev'))
	}

	private routing() {
		this.app.use('/profiles', authenticate, new ProfileService().router)
		this.app.get('/', (_, res) => {
			res.json({
				message: 'Hello World!',
			})
		})
	}

	private errorHandling() {
		if (isDevelopment) this.app.use(errorhandler({ log: true }))
	}
}
