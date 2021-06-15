import { Request, Response } from 'express'
import { ProfileAction } from './actions'

export class ProfileController {
	public async getAll(request: Request, response: Response) {
		const action = new ProfileAction()
		const data = await action.returnAllProfilesFromDatabase()
		response.json(data)
	}

	// TODO: Improve vaildation by implementing status codes and additional checkings,
	// like... this username is already taken and so on.
	public async createProfile(request: Request, response: Response) {
		const { createNewProfile } = new ProfileAction()
		let newProfile

		try {
			newProfile = await createNewProfile(request.body)
			response
				.json({
					data: newProfile,
				})
				.status(200)
		} catch (e) {
			response.json({
				e: e,
			})
		}
	}
}
