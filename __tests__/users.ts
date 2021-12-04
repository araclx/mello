import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import HTTPinterface from '_core/interfaces/http'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { User } from 'users/model'

const test = anyTest as TestInterface<{ server: http.Server; url: string; mongod: any }>
const app = new HTTPinterface().app

test.before(async (t) => {
	t.context.server = http.createServer(app)
	t.context.url = await listen(t.context.server)
	t.context.mongod = await MongoMemoryServer.create()
	await mongoose.connect(t.context.mongod.getUri())
})

test.beforeEach(async () => {
	await new User({
		email: 'one@example.com',
		password: '123456789',
		username: 'sampleusername',
	}).save()
})

test.afterEach.always(async () => {
	await User.deleteMany()
})

// test.todo(
// 	'get users'
// 	// TODO: Create request to API
// 	// TODO: Create request to database
// 	// TODO: Compare data returned by API and Database
// )

test.serial('in-memory database should connect to mongoose', async (t) => {
	const contextDatabaseUri = t.context.mongod.getUri()
	const actualConnectionUri: any = `mongodb://${mongoose.connection.host}:${mongoose.connection.port}/`
	t.is(actualConnectionUri, contextDatabaseUri)
})

test.serial('in-memory database should hold exactly one record', async function (t) {
	const users = await User.find()
	t.is(users.length, 1)
})

test.serial('in-memory database should be empty', async (t) => {
	await User.deleteMany()
	const users = await User.find()
	t.is(users.length, 0)
})

// TODO: Something is wrong with the express server because when request is related to mongoose, it doesn't work

// test.serial('server should return users from database', async function (t) {
// 	console.log(t.context.url)
// 	const response = await got(`${t.context.url}/v1/users`)
// 	console.log(response)
// 	// const response = await got('v1/users', {
// 	// 	prefixUrl: t.context.url,
// 	// })
// 	// const users = JSON.parse(response.body)
// 	// t.is(users.length, 1)
// })

test.todo('create user')
test.todo('update user')
test.todo('delete user')
test.todo('get user')

test.after.always(async (t) => {
	t.context.server.close()
	await mongoose.connection.dropDatabase()
	await mongoose.disconnect()
	await t.context.mongod.stop()
})
