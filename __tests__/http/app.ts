import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import app from '../../lib'

const test = anyTest as TestInterface<{ server: http.Server; url: string }>

test.before(async (t) => {
	t.context.server = http.createServer(app)
	t.context.url = await listen(t.context.server)
})

test.after.always((t) => {
	t.context.server.close()
})

interface HeyData {
	message: string
}

test.serial('GET /', async (t) => {
	const data: HeyData = await got('hey', { prefixUrl: t.context.url }).json()
	t.is(data.message, 'hey')
})
