import { PrismaClient as Prisma } from '@prisma/client'

export class ProfileAction {
	public async findProfiles() {
		const prisma = new Prisma()
		const allUsers = await prisma.user.findMany()
		return allUsers
	}
}
