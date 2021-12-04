import { AUTH_TOKEN, MONGODB_URI } from './env'
import MongoStore from 'connect-mongo'
import { ExtractJwt } from 'passport-jwt'
import { isDev, isDevOrCI } from './funs'

const mongoStore = new MongoStore({
	mongoUrl: MONGODB_URI,
	collectionName: 'sessions',
})

export const sessionConfig = {
	// TODO: We can think about potential migration to Memcached with following package: https://www.npmjs.com/package/connect-memcached
	store: isDevOrCI ? null : mongoStore,
	secret: AUTH_TOKEN,
	// NOTE: "secure" should be turned on on production, it requires https to work at all so it's disabled during development time, maybe we can make it relative to NODE_ENV.
	secure: isDev ? false : true,
	resave: false,
	saveUninitialized: false,
}

export const jwtConfig = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: AUTH_TOKEN,
	// issuer: 'araclx.com',
	// audience: 'm3llo.co'
}
