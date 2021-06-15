import { PrismaClient as Prisma } from '@prisma/client'

export class ProfileAction {
	public async returnAllProfilesFromDatabase() {
		const prisma = new Prisma()
		const allUsers = await prisma.profile.findMany()
		return allUsers
	}

	public async createNewProfile(newUserDataPayload) {
		const prisma = new Prisma()
		const newProfile = await prisma.profile.create({
			data: newUserDataPayload,
		})
		return newProfile
	}
}
