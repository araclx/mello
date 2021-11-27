import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JsonWebTokenStrategy, extract } from 'passport-jwt'
import { User } from 'users/model'
import { verify } from 'utils/crypto'
import { AUTH_TOKEN } from '../utils/env'

/* Fucking Passport-thing selection */

passport.serializeUser((user: any, done) => {
	// ? ID or _ID
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user)
	})
})

passport.use(
	new LocalStrategy({ usernameField: 'username' }, function (username, password, done) {
		User.findOne({ username: username })
			.then(function (user) {
				if (!user) {
					return done(null, false, { message: 'No such user' })
				}
				if (!verify(password, user.password)) {
					return done(null, false, { message: 'Wrong password' })
				}
				return done(null, user)
			})
			.catch(function (err) {
				return done(null, false, { message: err })
			})
	})
)

export default passport

/* I wish to be dead already... */
