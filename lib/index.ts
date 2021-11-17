import server from './interfaces/http'
import getPort from 'get-port'
import consola from 'consola'
import { MELLO_PORT, HOST } from 'utils/env'
import { mongooseService } from 'interfaces/services/mongoose'
import { minioService } from 'interfaces/services/minio'

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
