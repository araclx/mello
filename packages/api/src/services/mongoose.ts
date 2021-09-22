import mongoose from 'mongoose'
import signale from 'signale'
import { MONGODB_URI, NODE_ENV } from 'utils/env'

const logger = signale.scope('mongoose')
if (NODE_ENV === 'CI') logger.disable()

export async function mongooseService() {
	mongoose.connection.on('connection', () => {
		logger.success('Connected to database.')
	})
	mongoose.connection.on('reconnected', () => {
		logger.success('Reconnected to database.')
	})
	mongoose.connection.on('disconected', () => {
		logger.warn('Disconected from database.')
		logger.info('Reconnecting to database...')
		setTimeout(() => {
			// TODO: We need additional arguments here?
			mongoose.connect(MONGODB_URI)
		}, 3000)
	})
	mongoose.connection.on('close', () => {
		logger.log('Connection closed.')
	})
	mongoose.connection.on('error', (error) => {
		logger.error('Database error \n', error)
	})

	// TODO: We need additional arguments here?
	await mongoose.connect(MONGODB_URI).catch((error) => {
		signale.error('Database error \n', error)
	})
}
