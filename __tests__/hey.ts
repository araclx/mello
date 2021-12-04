import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import HTTPinterface from '_core/interfaces/http'

const test = anyTest as TestInterface<{ server: http.Server; url: string }>
const app = new HTTPinterface().app

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

test.serial('get default hello', async (t) => {
	const data: HeyData = await got('v1/hey', { prefixUrl: t.context.url }).json()
	t.is(data.message, 'hey')
})

test.serial('request specified hello', async (t) => {
	const testParameter = 'Jay'

	const request: any = await got
		.post('v1/hey', {
			prefixUrl: t.context.url,
			json: {
				name: testParameter,
			},
		})
		.json()

	t.is(request.message, `hello ${testParameter}`)
})
