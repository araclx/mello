import { requiresAuth } from 'express-openid-connect'
import express from 'express'

const router = express.Router()

router.get('/status', (req, res) => {
	res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

router.get('/', requiresAuth(), (req, res) => {
	res.json(req.oidc.user)
})

export default router
