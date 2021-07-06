import { Router } from 'express'
import { uploadAvatarToS3 } from '../middleware/uploadAvatarToS3'
import { handleAvatarUpload } from '../middleware/handleAvatarUpload'
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
		this.router.get('/:id', this.controller.getProfile)
		this.router.post('/', handleAvatarUpload, uploadAvatarToS3, this.controller.createProfile)
		this.router.post('/update/:id', this.controller.updateProfile)
		this.router.post('/delete/:id', this.controller.deleteProfile)
	}
}
