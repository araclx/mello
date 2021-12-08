import argon2 from 'argon2'
// import bcrypt from 'bcrypt'

export async function hash(text: string) {
	return argon2.hash(text)
}

export async function verify(text: string, hash: string) {
	return await argon2.verify(hash, text)
}
