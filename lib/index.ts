import server from './_core/interfaces/http'
import getPort from 'get-port'
import consola from 'consola'
import { MELLO_PORT, HOST } from '_utils/env'
import { mongooseService } from '_core/services/mongoose'
import { minioService } from '_core/services/minio'

export async function createHttpServer() {
	let PORT = await getPort({
		port: MELLO_PORT,
	})
	server.listen(PORT, () => {
		consola.success(`Server is alive on http://${HOST}:${PORT}`)
	})

	mongooseService()
	minioService()
}

createHttpServer()
