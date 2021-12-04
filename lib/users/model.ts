import { Schema, model } from 'mongoose'

const schema = new Schema({
	firstName: String,
	lastName: String,
	email: { type: String, unique: true, required: true },
	username: { type: String, unique: true, required: true, min: 6, max: 32 },
	password: String,
	birthdate: Date,
	height: Number,
	weight: Number,
	gender: String,
	profilePicture: String,
	photos: [String],
	location: String,
})

export const User = model('User', schema)
