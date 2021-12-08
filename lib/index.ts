import HTTPinterface from './_core/interfaces/http'
import getPort from 'get-port'
import consola from 'consola'
import cfonts from 'cfonts'
import { MELLO_PORT, HOST } from '_utils/env'
import { mongooseService } from '_core/services/mongoose'
import { minioService } from '_core/services/minio'

const server = new HTTPinterface().app

export async function startHTTPinterface() {
	// Setup rices
	consola.wrapConsole()

	const melloPORT = await getPort({ port: MELLO_PORT })
	server.listen(melloPORT, function () {
		cfonts.say('Mello', {
			align: 'center',
		})
		consola.success(`HTTP interface listening on http://${HOST}:${melloPORT}`)
	})
	await mongooseService()
	await minioService()
}

startHTTPinterface()
