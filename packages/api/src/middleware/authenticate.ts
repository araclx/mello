import jwt from 'express-jwt'
import { AUTH0_AUDIENCE, AUTH0_DOMAIN, JWT_SECRET } from '../utils/env'

export const authenticate = jwt({
	secret: JWT_SECRET,
	audience: AUTH0_AUDIENCE,
	issuer: `https://${AUTH0_DOMAIN}/`,
	algorithms: ['HS256'],
	requestProperty: 'payload',
})
