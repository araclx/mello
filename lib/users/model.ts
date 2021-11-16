import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	username: String,
})

export const User = mongoose.model('User', userSchema)
