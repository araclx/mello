import { Request, Response, Router } from 'express'
import { User } from 'users/model'
import { hash } from '_utils/crypto'
import joi from 'joi'

export class UserController {
	public async getAll(req: Request, res: Response) {
		const users = await User.find()
		res.json(users)
	}

	public async requestOneUserByUsername(req: Request, res: Response) {
		const usernameParams = req.params.username
		const requestedUser = await User.findOne({ username: usernameParams })
		if (!requestedUser) {
			res.status(404).json({ error: 'User not found' })
		} else {
			res.status(200).json(requestedUser)
		}
	}

	// TODO: Route should not be acessible by users
	public async createNewUserInDatabase(req: Request, res: Response) {
		/**
		 *  Validate the request (returns error if not valid) otherwise returns actual body of the request.
		 */
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
		value.password = await hash(value.password)

		if (error) {
			res.status(400).json({ error: error.message })
			return
		}

		User.findOne({ email: value.email, username: value.username }, async (err, user) => {
			if (user) {
				res.status(400).json({ error: 'User already exists' })
			} else {
				// If there isn't existing User in database create a new user
				const user = new User(value)
				await user.save()
				res.status(201).json({
					data: user,
				})
			}
		})
	}

	public async updateOne(req: Request, res: Response) {}
	public async deleteOne(req: Request, res: Response) {}
}

export class UserService {
	public router: Router
	private controller: UserController = new UserController()
	constructor() {
		this.router = Router()
		this.routes()
	}

	public routes() {
		this.router.post('/', this.controller.createNewUserInDatabase)
	}
}
