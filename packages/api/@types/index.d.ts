import { Gender, Hobby, MBTI } from '@prisma/client'

interface userPayload {
	username: string
	firstName: string
	lastName: string
	email: string
	gender?: Gender
	height: number
	weight: number
	birthDate: string
	hairColor: string
	eyeColor: string
	biography: string
	lastLogin?: string
	mbti?: MBTI
	hobbys?: Hobby[]
	location?: string
}

declare global {
	namespace Express {
		interface Request {
			payload?: userPayload
		}
	}
}
