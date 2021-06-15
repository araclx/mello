import { Request, Response } from 'express'
import { ProfileAction } from './actions'

export class ProfileController {
	public async getAll(request: Request, response: Response) {
		const action = new ProfileAction()
		const data = await action.returnAllProfilesFromDatabase()
		response.json(data)
	}

	public async createProfile(request: Request, response: Response) {}
}
