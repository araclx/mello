import argon2 from 'argon2'
// import bcrypt from 'bcrypt'

export async function hash(text: string) {
	// const prehashstr = await bcrypt.hash(text, 10)
	// const hashstr = await argon2.hash(prehashstr)
	// return hashstr
	return argon2.hash(text)
}

export async function verify(text: string, hash: string) {
	return await argon2.verify(hash, text)
	// if (!precompare) {
	// 	return false
	// } else {
	// 	return await bcrypt.compare(text, precompare)
	// }
}
