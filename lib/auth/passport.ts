import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { User } from 'users/model'
import { verify } from 'utils/crypto'
import { jwtConfig } from '../utils/config'

/* Fucking Passport-thing selection */

let localstrategy = new LocalStrategy({ usernameField: 'username' }, function (username, password, done) {
	User.findOne({ username: username })
		.then(function (user) {
			if (!user) {
				return done(null, false, { message: 'No such user' })
			}
			if (!verify(password, user.password)) {
				done(null, false, { message: 'Wrong password' })
			}
			return done(null, user)
		})
		.catch(function (err) {
			return done(null, false, { message: err })
		})
})

let jwtstrategy = new JwtStrategy(jwtConfig, function (payload, done) {
	User.findOne({ id: payload.sub })
		.then(function (user) {
			if (!user) {
				return done(null, false, { message: 'No such user' })
			}
			return done(null, user)
		})
		.catch(function (err) {
			return done(null, false, { message: err })
		})
})

passport.serializeUser((user: any, done) => {
	// ? ID or _ID
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user)
	})
})

passport.use(localstrategy)
passport.use(jwtstrategy)

export default passport

/* I wish to be dead already... */
