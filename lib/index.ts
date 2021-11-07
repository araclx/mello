import server from './interfaces/http'
import getPort from 'get-port'
import consola from 'consola'
import { MELLO_PORT, HOST } from 'utils/env'
import { mongoService } from 'interfaces/services/mongodb'

export async function createHttpServer() {
	let PORT = await getPort({
		port: MELLO_PORT,
	})

	mongoService()

	server.listen(PORT, () => {
		consola.success(`Server is alive on http://${HOST}:${PORT}`)
	})
}

createHttpServer()
