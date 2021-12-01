import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import app from '_core/interfaces/http'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { User } from 'users/model'

const test = anyTest as TestInterface<{ server: http.Server; url: string; mongod: any }>

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
		username: 'keinsell',
	}).save()
})

test.afterEach.always(() => {
	User.remove()
})

test.todo(
	'get users'
	// TODO: Create request to API
	// TODO: Create request to database
	// TODO: Compare data returned by API and Database
)

test.todo('create user')
test.todo('update user')
test.todo('delete user')
test.todo('get user')

test.after.always(async (t) => {
	t.context.server.close()
	await mongoose.disconnect()
	await t.context.mongod.stop()
})
