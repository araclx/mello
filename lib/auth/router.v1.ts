import express from 'express'
import passport from 'passport'

const router = express.Router()

// I have no fucking idea what's wrong with this Passport...

router.post('/login', (req, res, next) => {
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return res.status(400).json({ errors: err })
		}
		if (!user) {
			return res.status(400).json({ errors: 'No user found' })
		}
		req.logIn(user, function (err) {
			if (err) {
				return res.status(400).json({ errors: err })
			}
			return res.status(200).json({ success: `logged in ${user.username}` })
		})
	})(req, res, next)
})
export default router
