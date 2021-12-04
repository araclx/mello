import express, { Router } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import { jwtConfig } from '../../_utils/config'

class AuthController {
	public authenticateUser(req: express.Request, res: express.Response, next: express.NextFunction) {
		passport.authenticate('local', function (err, user) {
			if (err) {
				return res.status(400).json({ errors: err })
			}

			if (!user) {
				return res.status(400).json({ message: 'User with specified data do not exist (wrong password, login or no account)' })
			}

			req.logIn(user, function (err) {
				const token = jwt.sign({ id: user.id }, jwtConfig.secretOrKey)
				if (err) {
					return res.status(400).json({ errors: err })
				}
				return res.status(200).json({ success: `Hello! ${user.username}`, token: token, data: user })
			})

			return 0
		})(req, res, next)
	}

	public returnUserProfile(req: express.Request, res: express.Response) {
		res.json(req.user)
	}
}

export class AuthService {
	public router: Router
	private controller: AuthController = new AuthController()
	constructor() {
		this.router = express.Router()
		this.routes()
	}

	public routes() {
		this.router.post('/login', this.controller.authenticateUser)
		this.router.get('/me', passport.authenticate('jwt'), this.controller.returnUserProfile)
	}
}
