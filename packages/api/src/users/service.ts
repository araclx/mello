import { Router } from 'express'
import { authenticate } from '../middleware/authenticate'
import { ProfileController } from './controller'

export class ProfileService {
	public router: Router
	public controller: ProfileController = new ProfileController()

	constructor() {
		this.router = Router()
		this.routes()
	}

	public routes() {
		this.router.get('/', authenticate, this.controller.getAll)
		this.router.post('/', authenticate, this.controller.createProfile)
	}
}
