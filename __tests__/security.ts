import anyTest, { TestFn as TestInterface } from 'ava'
import got from 'got'
import http from 'http'
import listen from 'test-listen'
import HTTPinterface from '_core/interfaces/http'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { User } from 'users/model'
import { hash, verify } from '_utils/crypto'

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

test.serial('cryptography functions should hash and verify', async (t) => {
	const user = await User.findOne({ username: 'sampleusername' })

	const { password } = user

	const hashedPassword = await hash(password)
	User.findByIdAndUpdate(user._id, { password: hashedPassword })

	const passwordVerification = await verify(password, hashedPassword)
	const failedPasswordVerification = await verify('wrongpassword', hashedPassword)

	// Check if the password hashing functions work
	t.true(passwordVerification)
	t.false(failedPasswordVerification)
})

test.todo('authenticate user')
test.todo('get into protected route')
test.todo('authenticate user with invalid credentials')
test.todo('authenticate user with invalid password')
test.todo('cryptography functions should provide safe encryption')

test.after.always(async (t) => {
	t.context.server.close()
	await mongoose.connection.dropDatabase()
	await mongoose.disconnect()
	await t.context.mongod.stop()
})
