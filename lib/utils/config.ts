import { AUTH_TOKEN, MONGODB_URI } from './env'
import MongoStore from 'connect-mongo'

export const sessionConfig = {
	store: new MongoStore({
		mongoUrl: MONGODB_URI,
		collectionName: 'sessions',
	}),
	secret: AUTH_TOKEN,
	resave: false,
	saveUninitialized: false,
}
