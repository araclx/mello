import { config } from 'dotenv'
import consola from 'consola'
import crypto from 'crypto'

config()

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const HOST = process.env.HOST! || 'localhost'
export const PROTOCOL = process.env.PROTOCOL! || 'http'
export const MELLO_PORT = Number(process.env.MELLO_PORT!) || 1337

export const MONGODB_URI = process.env.MONGODB_URI! || 'mongodb://localhost:27017/mello'

// Authentication-related Configuration
/* To generate secure secret for auth, use command: openssl rand -hex 32 */

export const AUTH_SECRET = process.env.MELLO_AUTH_SECRET! || crypto.randomBytes(64).toString('hex')
export const AUTH_CLIENTID = process.env.MELLO_AUTH_CLIENTID!
export const AUTH_ISSUER = process.env.MELLO_AUTH_ISSUER!

export const AUTH0_CONFIG = {
	authRequired: false,
	auth0Logout: true,
	secret: AUTH_SECRET,
	baseURL: `${PROTOCOL}://${HOST}:${MELLO_PORT}`,
	clientID: AUTH_CLIENTID,
	issuerBaseURL: AUTH_ISSUER,
}

// Minio Configuration
export const MINIO_HOST = process.env.MELLO_MINIO_HOST! || 'localhost'
export const MINIO_ACCESSKEY = process.env.MELLO_MINIO_ACCESSKEY! || 'mello'
export const MINIO_SECRETKEY = process.env.MELLO_MINIO_SECRETKEY! || '12345678'

// Security Configuration
export const AUTH_TOKEN = process.env.MELLO_AUTH_TOKEN! || crypto.randomBytes(64).toString('hex')

if (!AUTH_SECRET || !AUTH_CLIENTID || !AUTH_ISSUER) {
	consola.warn('Auth0 Configuration is missing on your environment variables')
}
