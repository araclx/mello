import { PrismaClient } from '@prisma/client'

export class ProfileAction {
	public async returnAllProfilesFromDatabase() {
		const prisma = new PrismaClient()
		const allUsers = await prisma.profile.findMany()
		return allUsers
	}

	public async returnProfileFromDatabase(id: number) {
		const prisma = new PrismaClient();
		const profile = await prisma.profile.findUnique({ where: { id } });
		return profile;
	}

	public async createNewProfile(newUserDataPayload) {
		const prisma = new PrismaClient()
		const newProfile = await prisma.profile.create({
			data: newUserDataPayload,
		})
		return newProfile
	}

	public async updateProfile(id: number, dataToUpdate: any) {
		const prisma = new PrismaClient();
		const updatedProfile = await prisma.profile.update({
			where: { id },
			data: dataToUpdate,
		});
		return updatedProfile;
	}
	
	public async deleteProfile(id: number) {
		const prisma = new PrismaClient();
		const deletedProfile = await prisma.profile.delete({ where: { id } });
		return deletedProfile;
	}
}
