import { config } from 'dotenv'

config()

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const HOST = process.env.HOST! || 'localhost'
export const MELLO_PORT = Number(process.env.MELLO_PORT!) || 1337

// Authentication-related Configuration
/* To generate secure secret for auth, use command: openssl rand -hex 32 */
export const MELLO_AUTH_SECRET = process.env.MELLO_AUTH_SECRET! || 'devisnotsecure'
export const MELLO_AUTH_CLIENTID = process.env.MELLO_AUTH_CLIENTID!
export const MELLO_AUTH_ISSUER = process.env.MELLO_AUTH_ISSUER!
