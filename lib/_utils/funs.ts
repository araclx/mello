import { NODE_ENV } from './env'

export function isDev() {
	if (NODE_ENV === 'development') true
	else false
}
