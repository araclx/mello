import { PrismaClient } from '@prisma/client'

export class ProfileAction {
	public async returnAllProfilesFromDatabase() {
		const prisma = new PrismaClient()
		const allUsers = await prisma.profile.findMany()
		return allUsers
	}

	public async returnProfileFromDatabase(userDataPayload) {
		const prisma = new PrismaClient();
		const profile = await prisma.profile.findUnique({ where: userDataPayload.userData });
		return profile;
	}

	public async createNewProfile(newUserDataPayload) {
		const prisma = new PrismaClient()
		const newProfile = await prisma.profile.create({
			data: newUserDataPayload,
		})
		return newProfile
	}

	public async updateProfile(newUserDataPayload) {
		const prisma = new PrismaClient();
		const updatedProfile = await prisma.profile.update({
			where: newUserDataPayload.userData,
			data: newUserDataPayload.data,
		});
		return updatedProfile;
	}
	
	public async deleteProfile(userDataPayload) {
		const prisma = new PrismaClient();
		const deletedProfile = await prisma.profile.delete({ where: userDataPayload.userData });
		return deletedProfile;
	}
}
