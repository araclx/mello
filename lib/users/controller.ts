import { Request, Response } from 'express'
import { User } from 'users/model'

export class UserController {
	public async getAll(req: Request, res: Response) {
		const users = await User.find()
		res.json(users)
	}
}
