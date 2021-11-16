import { Request, Response } from 'express'
import { User } from 'users/model'
import { hash } from 'utils/crypto'
import joi from 'joi'

export class UserController {
	public async getAll(req: Request, res: Response) {
		const users = await User.find()
		res.json(users)
	}

	public async createNew(req: Request, res: Response) {
		const schema = joi.object().keys({
			username: joi.string().required().max(32),
			email: joi.string().email().required(),
			password: joi.string().required(),
			firstName: joi.string(),
			lastName: joi.string(),
		})

		const { error, value } = schema.validate(req.body)

		value.password = await hash(value.password)

		if (error) {
			res.status(400).json({ error: error.message })
			return
		}

		const user = new User(value)
		await user.save()
		res.json({
			data: user,
		})
	}
}
