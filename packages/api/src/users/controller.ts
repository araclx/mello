import { Request, Response } from 'express'
import { ProfileAction } from './actions'

export class ProfileController {
	public async getAll(request: Request, response: Response) {
		const action = new ProfileAction()
		const data = await action.returnAllProfilesFromDatabase()
		response.json(data)
	}

	public async getProfile(request: Request, response: Response) {
		const { returnProfileFromDatabase } = new ProfileAction()

		try {
			const profile = await returnProfileFromDatabase(Number.parseInt(request.params.id))
			if (profile)
				response
					.json({
						data: profile,
					})
					.status(200)
			else response.sendStatus(404)
		} catch (e) {
			response
				.json({
					e: e.message,
				})
				.status(500)
		}
	}

	// TODO: Improve vaildation by implementing status codes and additional checkings,
	// like... this username is already taken and so on.
	public async createProfile(request: Request, response: Response) {
		const { createNewProfile } = new ProfileAction()
		let newProfile

		try {
			newProfile = await createNewProfile(request.payload, request.body['avatar'])
			response
				.json({
					data: newProfile,
				})
				.status(200)
		} catch (e) {
			response.json({
				e: e.message,
			})
		}
	}

	public async updateProfile(request: Request, response: Response) {
		const { updateProfile } = new ProfileAction()

		try {
			const updatedProfile = await updateProfile(Number.parseInt(request.params.id), request.body)
			response
				.json({
					data: updatedProfile,
				})
				.status(200)
		} catch (e) {
			response
				.json({
					e: e.message,
				})
				.status(500)
		}
	}

	public async deleteProfile(request: Request, response: Response) {
		const { deleteProfile } = new ProfileAction()
		try {
			const deletedProfile = await deleteProfile(Number.parseInt(request.params.id))
			if (deletedProfile)
				response
					.json({
						data: {
							deletedProfile,
						},
					})
					.status(200)
			else response.sendStatus(400)
		} catch (e) {
			response
				.json({
					e: e.message,
				})
				.status(500)
		}
	}
}
