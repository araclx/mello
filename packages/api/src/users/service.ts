import { Router } from 'express'
import { ProfileController } from './controller'

export class ProfileService {
	public router: Router
	public controller: ProfileController = new ProfileController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	public routes() {
		this.router.get('/', this.controller.getAll)
		this.router.post('/', this.controller.createProfile)
	}
}
