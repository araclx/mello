/* File with easy accessible environment variables */

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const HOST = process.env.HOST! || 'localhost'
export const MELLO_PORT = Number(process.env.MELLO_PORT!) || 1337
