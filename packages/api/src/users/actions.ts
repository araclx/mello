import { PrismaClient } from '@prisma/client'

export class ProfileAction {
	public async returnAllProfilesFromDatabase() {
		const prisma = new PrismaClient()
		const allUsers = await prisma.profile.findMany()
		return allUsers
	}

	public async createNewProfile(newUserDataPayload) {
		const prisma = new PrismaClient()
		const newProfile = await prisma.profile.create({
			data: newUserDataPayload,
		})
		return newProfile
	}
}
