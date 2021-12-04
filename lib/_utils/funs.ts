import { NODE_ENV } from './env'

export function isDev() {
	if (NODE_ENV == 'development') true
	else false
}

export function isDevOrCI() {
	if (NODE_ENV == 'development' || NODE_ENV == 'CI') true
	else false
}