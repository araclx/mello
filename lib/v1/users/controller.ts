import { Request, Response } from 'express'
import { User } from './model'
import joi from 'joi'

export async function createNewUser(req: Request, res: Response) {
	const createNewUserSchema = joi.object({
		email: joi.string().email().required(),
		username: joi.string().required().min(6).max(36),
		password: joi.string().required(),
	})

	const { error, value } = createNewUserSchema.validate(req.body)

	if (error) res.status(400).json({ error: error.message })

	const newUser = new User(value)

	try {
		let createNewUser = await newUser.save()
		res.status(201).json({ data: createNewUser })
	} catch (error) {
		res.status(400).json(error)
	}
}
