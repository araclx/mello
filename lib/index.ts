import server from './interfaces/http'
import getPort from 'get-port'

export async function createHttpServer() {
	let generatedPort = await getPort()
	server.listen(generatedPort, () => {
		console.log(`Server is listening on port ${generatedPort}`)
	})
}

createHttpServer()
