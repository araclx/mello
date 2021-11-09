import { Request, Response } from 'express'
import { User } from './model'
import { hash } from 'utils/crypto'
import joi from 'joi'
import argon2 from 'argon2'
import bcrypt from 'bcrypt'

export async function createNewUser(req: Request, res: Response) {
	const createNewUserSchema = joi.object({
		email: joi.string().email().required(),
		username: joi.string().required().min(6).max(36),
		password: joi.string().required(),
	})

	let { error, value } = createNewUserSchema.validate(req.body)
	if (error) res.status(400).json({ error: error.message })

	value.password = await hash(value.password)
	const newUser = new User(value)

	try {
		let createNewUser = await newUser.save()
		res.status(201).json({ data: createNewUser })
	} catch (error) {
		res.status(400).json(error)
	}
}

export async function getAllUsers(req: Request, res: Response) {
	const users = await User.find()
	res.status(200).json({ data: users })
}

// ? Do we need another endpoint for chaning passwrord?
// I think we can use the same one for update and changing pass.

export async function updateUser(req: Request, res: Response) {}
