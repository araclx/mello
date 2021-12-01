import argon2 from 'argon2'
import bcrypt from 'bcrypt'

export async function hash(text: string) {
	const prehashstr = await bcrypt.hash(text, 10)
	const hashstr = await argon2.hash(prehashstr)
	return hashstr
}

export async function verify(text: string, hash: string) {
	const precompare = await argon2.verify(hash, text)
	if (!precompare) {
		return false
	} else {
		return await bcrypt.compare(text, precompare)
	}
}
