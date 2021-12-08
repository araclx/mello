import mongoose from 'mongoose'
import consola from 'consola'
import { MONGODB_URI, NODE_ENV } from '_utils/env'

const logger = consola.withScope('mongoose')
if (NODE_ENV === 'CI') logger.pause()

export async function mongooseService() {
	mongoose.connection.on('connected', () => {
		logger.success('Connected to MongoDB.')
	})
	mongoose.connection.on('reconnected', () => {
		logger.success('Reconnected to database.')
	})
	mongoose.connection.on('disconected', () => {
		logger.warn('Disconected from database.')
		logger.info('Reconnecting to database...')
		setTimeout(() => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
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

	await mongoose
		.connect(MONGODB_URI, {
			keepAlive: true,
		})
		.catch((error) => {
			logger.error('Database error \n', error)
		})
}
