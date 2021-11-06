import { auth, requiresAuth } from 'express-openid-connect'
import express from 'express'
import { MELLO_AUTH_CLIENTID, MELLO_AUTH_ISSUER, MELLO_AUTH_SECRET } from 'utils/env'

const router = express.Router()

/* This authentication method should be used only for v2 API

app.use(
	auth({
		authRequired: false,
		auth0Logout: true,
		secret: MELLO_AUTH_SECRET,
		baseURL: 'http://localhost:1337',
		clientID: MELLO_AUTH_CLIENTID,
		issuerBaseURL: MELLO_AUTH_ISSUER,
	})
)

*/

router.get('/login-status', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

router.get('/profile', requiresAuth(), (req, res) => {
	res.json(req.oidc.user)
})

export default router
