import express from 'express'
import passport from 'passport'

const router = express.Router()

// I have no fucking idea what's wrong with this Passport...

router.post(
	'/login',
	passport.authenticate('local', {
		failureRedirect: '/login',
		successRedirect: '/status',
	}),
	(err, req, res, next) => {
		if (err) next(err)
	}
)
export default router
