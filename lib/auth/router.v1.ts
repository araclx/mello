import express from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import { jwtConfig } from '../utils/config'

const router = express.Router()

// I have no fucking idea what's wrong with this Passport...

// This is fucked up I think, even if I don't see an error there this route allows me to login under specific username with literally any password. I don't know what's wrong with it.
router.post('/login', (req, res, next) => {
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
})

router.get('/profile', passport.authenticate('jwt'), (req, res) => {
	if (req.isAuthenticated()) {
		res.status(200).json(req.user)
	} else {
		res.status(404)
	}
})

export default router
