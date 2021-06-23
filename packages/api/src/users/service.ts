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
		this.router.get('/profile', this.controller.getProfile)
		this.router.post('/', this.controller.createProfile)
		this.router.post('/update', this.controller.updateProfile)
		this.router.post('/delete', this.controller.deleteProfile)
	}
}
