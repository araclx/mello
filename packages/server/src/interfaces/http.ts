import express from 'express'
import compression from 'compression'
import cors from 'cors'
import signale from 'signale'
import getport from 'get-port'
import morgan from 'morgan'
import cfonts from 'cfonts'

export class httpInterface {
    public app: express.Application

    constructor() {
        this.app = express()
        this.middleware()
    }

    /** Core function dedicated for running Node.js server on preffered port from .env,
     * (specified in MELLO_PORT variable), otherwise if not specified server will fallback to 1337,
     * if 1337 will be not available server will automatically find free port. */
    public async listen() {

        // TODO: Move these variables to environment typescript file.
        const HOST = process.env.HOST! || 'localhost'
        const PORT = Number.parseInt(process.env.MELLO_PORT!) || 1337

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
        this.app.disable("x-powered-by")
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cors())
        this.app.use(compression())
    }

   // private routing() {}
   // private errorHandling() {}
}