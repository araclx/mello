import server from './interfaces/http'
import getPort from 'get-port'
import { MELLO_PORT, HOST } from 'utils/env'

export async function createHttpServer() {
	let PORT = await getPort({
		port: MELLO_PORT,
	})
	server.listen(PORT, () => {
		console.log(`Server is alive on http://${HOST}:${PORT}`)
	})
}

createHttpServer()
