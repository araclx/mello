import argon2 from 'argon2'
import crypto from 'crypto'

export async function hash(text: string) {
	let salt = crypto.randomBytes(32).toString('hex')
	var generatedHash = crypto.pbkdf2Sync(text, salt, 10000, 64, 'sha512').toString('hex')
	generatedHash = await argon2.hash(text)

	return {
		hash: generatedHash,
		salt: salt,
	}
}

export async function verify(text: string, hash: string, salt: string) {
	// let verifyHash = crypto.pbkdf2Sync(hash, salt, 10000, 64, 'sha512').toString('hex')
	const verification = await argon2.verify(hash, text)
	return verification
}
