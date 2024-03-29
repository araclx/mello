import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import HTTPinterface from '_core/interfaces/http'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { User } from 'users/model'
import jwt from 'jsonwebtoken'
import { hash, verify } from '_utils/crypto'
import { jwtConfig } from '_utils/config'

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
		password: await hash('123456789'),
		username: 'sampleusername',
	}).save()
})

test.afterEach.always(async () => {
	await User.deleteMany()
})

test.serial('cryptography functions should hash and verify', async (t) => {
	const user = await User.findOne({ username: 'sampleusername' })

	const { password } = user

	const passwordVerification = await verify('123456789', password)
	const failedPasswordVerification = await verify('wrongpassword', password)

	// Check if the password hashing functions work
	t.true(passwordVerification)
	t.false(failedPasswordVerification)
})

test.serial('user should be authenticated', async (t) => {
	const request = await got.post('v1/auth/login', {
		prefixUrl: t.context.url,
		json: {
			username: 'sampleusername',
			password: '123456789',
			email: 'one@example.com',
		},
	})

	const response = JSON.parse(request.body)
	t.is(request.statusCode, 200)
})

test.serial('authorized user should be able to get into protected route', async (t) => {
	const request = await got.post('v1/auth/login', {
		prefixUrl: t.context.url,
		json: {
			username: 'sampleusername',
			password: '123456789',
			email: 'one@example.com',
		},
	})

	const response = JSON.parse(request.body)
	const { token } = response

	const requestThatRequireAuthorization = await got.get('v1/auth/me', {
		prefixUrl: t.context.url,
		headers: {
			authorization: `Bearer ${token}`,
		},
	})

	const authorizedContentOfUserProfile = JSON.parse(requestThatRequireAuthorization.body)

	t.is(authorizedContentOfUserProfile.username, 'sampleusername')
	t.is(requestThatRequireAuthorization.statusCode, 200)
})

// This crashes application, there investigation is needed
// test.serial('user should not be authenticated because wrong password', async (t) => {
// 	const request = await got.post('v1/auth/login', {
// 		prefixUrl: t.context.url,
// 		json: {
// 			username: 'sampleusername',
// 			password: '12sdxdfdsgset',
// 			email: 'one@example.com',
// 		},
// 	})

// 	const response = JSON.parse(request.body)
// 	console.log(response)
// 	// t.is(request.statusCode, 400)
// })

test.todo('authenticate user with invalid credentials')
test.todo('authenticate user with invalid password')
test.todo('cryptography functions should provide safe encryption')

test.after.always(async (t) => {
	t.context.server.close()
	// await mongoose.connection.dropDatabase()
	await mongoose.disconnect()
	await t.context.mongod.stop()
})
