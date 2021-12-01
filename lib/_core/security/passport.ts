import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JwtStrategy } from 'passport-jwt'
import { User } from 'users/model'
import { verify } from '_utils/crypto'
import { jwtConfig } from '../../_utils/config'

/* Fucking Passport-thing selection */

let localstrategy = new LocalStrategy({ usernameField: 'username' }, async function (username, password, done) {
	const aggregateUser = await User.findOne({ username: username })
	if (!aggregateUser) {
		return done(null, false)
	}
	if (!(await verify(password, aggregateUser.password))) {
		return done(null, false)
	}
	return done(null, aggregateUser)
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
