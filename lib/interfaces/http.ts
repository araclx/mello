import express from 'express'
import compression from 'compression'
import cors from 'cors'
import joi from 'joi'

import { auth, requiresAuth } from 'express-openid-connect'
import { MELLO_AUTH_CLIENTID, MELLO_AUTH_SECRET } from 'utils/env'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.use(
	auth({
		authRequired: false,
		auth0Logout: true,
		secret: MELLO_AUTH_SECRET,
		baseURL: 'http://localhost:1337',
		clientID: MELLO_AUTH_CLIENTID,
		issuerBaseURL: 'https://araclx.eu.auth0.com',
	})
)

app.get('/hey', (req: express.Request, res: express.Response) => res.json({ message: 'hey' }))
app.post('/hey', async (req: express.Request, res: express.Response) => {
	const { error, value } = joi
		.object({
			name: joi.string().required(),
		})
		.validate(req.body)

	if (error) {
		res.status(400).json({ error: error.message })
	} else {
		res.json({ message: `hello ${value.name}` })
	}
})

app.get('/login-status', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

app.get('/profile', requiresAuth(), (req, res) => {
	res.json(req.oidc.user)
})

export default app
