import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import faker from 'faker'
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
		email: faker.internet.email(),
		password: '123456789',
		username: faker.internet.userName(),
	}).save()
})

test.afterEach.always(async () => {
	await User.deleteMany()
})

test.serial('create new user in database', async (t) => {
	const request = await got.post('v1/users', {
		prefixUrl: t.context.url,
		method: 'POST',
		json: {
			email: 'jakub.jay.olan@gmail.com',
			password: '123456789',
			username: 'keinsell',
		},
	})

	const response = JSON.parse(request.body)

	t.is(request.statusCode, 201)
	t.is(response.data.email, 'jakub.jay.olan@gmail.com')
	t.is(response.data.username, 'keinsell')

	const users = await User.find()
	t.is(users.length, 2)
})

test.serial('return all users from database', async (t) => {
	const request = await got.get('v1/users', {
		prefixUrl: t.context.url,
	})

	const response = JSON.parse(request.body)

	const users = await User.find()
	t.is(request.statusCode, 200)
	t.is(users.length, response.length)
	t.is(response.length, 1)
})

test.todo('update user')
test.todo('delete user')
test.todo('get user')

test.after.always(async (t) => {
	t.context.server.close()
	// await mongoose.connection.dropDatabase()
	await mongoose.disconnect()
	await t.context.mongod.stop()
})
