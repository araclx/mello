import dotenv from 'dotenv'
import { isDevelopmentCheck } from './helpers'

dotenv.config()

// Core Configuration
export const HOST = process.env.HOST! || 'localhost'
export const PORT = Number.parseInt(process.env.MELLO_PORT!) || 1337

// Auth0 Configuration
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN!
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE!

export const NODE_ENV = process.env.NODE_ENV! || 'development'

// ENV-based Lifecycle Variables
export const isDevelopment = isDevelopmentCheck()

// JWT Secret
export const JWT_SECRET = process.env.JWT_SECRET! || 'shhhh'

// AWS S3 Configuration Variables
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID!;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY!;
export const AWS_REGION = process.env.AWS_REGION!;
export const AWS_BUCKET = process.env.AWS_BUCKET!;
