import mongoose from 'mongoose'
import consola from 'consola'
import { NODE_ENV, MONGODB_URI } from 'utils/env'

const logger = consola.withScope('mongoose')

if (NODE_ENV === 'development') mongoose.set('debug', true)
if (NODE_ENV !== 'development') logger.pause()

export async function mongoService() {
	mongoose.connection.on('connected', () => {
		logger.success('Successfully connected to database.')
	})
	mongoose.connection.on('reconnected', () => {
		logger.success('Reconnected to database.')
	})

	mongoose.connection.on('disconected', () => {
		logger.warn('Disconected from database.')
		logger.info('Reconnecting to database...')
		setTimeout(() => {
			mongoose.connect(MONGODB_URI, {
				keepAlive: true,
				socketTimeoutMS: 3000,
				connectTimeoutMS: 3000,
			})
		}, 3000)
	})

	mongoose.connection.on('close', () => {
		logger.log('Connection closed.')
	})
	mongoose.connection.on('error', (error) => {
		logger.error('Database error \n', error)
	})

	await mongoose.connect(MONGODB_URI, {}).catch((error) => {
		logger.error('Database error \n', error)
	})
}
