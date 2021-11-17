import { config } from 'dotenv'
import consola from 'consola'

config()

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const HOST = process.env.HOST! || 'localhost'
export const MELLO_PORT = Number(process.env.MELLO_PORT!) || 1337

export const MONGODB_URI = process.env.MONGODB_URI! || 'mongodb://localhost:27017/mello'

// Authentication-related Configuration
/* To generate secure secret for auth, use command: openssl rand -hex 32 */
if (process.env.MELLO_AUTH_CLIENTID! || process.env.MELLO_AUTH_ISSUER!) {
	consola.error('MELLO_AUTH_CLIENTID and MELLO_AUTH_ISSUER must be set in .env file')
}

export const AUTH_SECRET = process.env.MELLO_AUTH_SECRET! || 'devisnotsecure'
export const AUTH_CLIENTID = process.env.MELLO_AUTH_CLIENTID!
export const AUTH_ISSUER = process.env.MELLO_AUTH_ISSUER!

// Minio Configuration
export const MINIO_HOST = process.env.MELLO_MINIO_HOST! || 'localhost'
export const MINIO_ACCESSKEY = process.env.MELLO_MINIO_ACCESSKEY! || 'mello'
export const MINIO_SECRETKEY = process.env.MELLO_MINIO_SECRETKEY! || '12345678'
