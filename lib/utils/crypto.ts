import argon2 from 'argon2'

export async function hash(text: string) {
	return await argon2.hash(text)
}

export async function verify(encrypted: string, text: string) {
	return await argon2.verify(encrypted, text)
}
