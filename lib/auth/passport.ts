import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { Strategy as JsonWebTokenStrategy, extract } from 'passport-jwt'
import { User } from 'users/model'
import { verify } from 'utils/crypto'
import { AUTH_TOKEN } from '../utils/env'

export const localstrategy = new LocalStrategy({}, async (username, password, done) => {
	User.findOne({ username: username }, (err, user) => {
		if (err) {
			return done(err)
		}
		if (!user) {
			return done(null, false)
		}
		if (!verify(password, user.password, user.salt)) {
			return done(null, false)
		}
		return done(null, user)
	})
})

// const jwtstrategy = new JsonWebTokenStrategy({})
