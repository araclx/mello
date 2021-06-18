// Data Storage

// TODO: This file doens't work tho, in free time we'll be supposed to make it working.
// Actually we don't really need to give a fuck about it.

const hobbies = [
	{
		name: 'Programming',
	},
]

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
	hobbies.forEach(async (method) => {
		await prisma.hobby.create({
			data: { type: method },
		})
	})
}
