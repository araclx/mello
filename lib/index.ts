import server from './interfaces/http'
import getPort from 'get-port'
import consola from 'consola'
import { MELLO_PORT, HOST } from 'utils/env'

export async function createHttpServer() {
	let PORT = await getPort({
		port: MELLO_PORT,
	})
	server.listen(PORT, () => {
		consola.success(`Server is alive on http://${HOST}:${PORT}`)
	})
}

createHttpServer()
