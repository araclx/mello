import { Profile } from '.prisma/client'

interface profileUpdatePayload {
	userData?: {
		id?: number
		email?: string
		username?: string
	}
	data?: any
}

declare global {
	namespace Express {
		interface Request {
			payload?: Profile | profileUpdatePayload
		}
	}
}
