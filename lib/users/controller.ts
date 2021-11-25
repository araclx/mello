import { Request, Response } from 'express'
import { User } from 'users/model'
import { hash } from 'utils/crypto'
import joi from 'joi'

export class UserController {
	public async getAll(req: Request, res: Response) {
		const users = await User.find()
		res.json(users)
	}

	public async getOne(req: Request, res: Response) {
		const requestedUsername = req.params.username
		const dat = await User.findOne({ username: requestedUsername })
		res.json(dat)
	}

	public async createNew(req: Request, res: Response) {
		const schema = joi.object().keys({
			username: joi.string().required().max(32).min(6),
			email: joi.string().email().required(),
			password: joi.string().required(),
			firstName: joi.string(),
			lastName: joi.string(),
			birthdate: joi.date(),
			height: joi.number(),
			weight: joi.number(),
			gender: joi.string(),
			profilePicture: joi.string(),
			photos: joi.array(),
			location: joi.string(),
			salt: joi.string(),
		})

		const { error, value } = schema.validate(req.body)
		let encryption = await hash(value.password)
		value.password = encryption.hash
		value.salt = encryption.salt

		if (error) {
			res.status(400).json({ error: error.message })
			return
		}

		User.findOne({ email: value.email, username: value.username }, async (err, user) => {
			if (user) {
				res.status(400).json({ error: 'User already exists' })
			} else {
				const user = new User(value)
				await user.save()
				res.json({
					data: user,
				})
			}
		})
	}

	public async updateOne(req: Request, res: Response) {}
	public async deleteOne(req: Request, res: Response) {}
}
