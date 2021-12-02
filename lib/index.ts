import { HTTPinterface } from './_core/interfaces/http'
import getPort from 'get-port'
import consola from 'consola'
import { MELLO_PORT, HOST } from '_utils/env'
import { mongooseService } from '_core/services/mongoose'
import { minioService } from '_core/services/minio'

const server = new HTTPinterface().app

export async function startHTTPinterface() {
	const melloPORT = await getPort({ port: MELLO_PORT })
	server.listen(melloPORT, function () {
		consola.ready(`HTTP interface listening on http://localhost:${melloPORT}`)
	})
	await mongooseService()
	await minioService()
}

startHTTPinterface()
