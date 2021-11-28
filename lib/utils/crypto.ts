import argon2 from '@phc/argon2'
import upash from 'upash'
import crypto from 'crypto'

upash.install('argon2', argon2)

export async function hash(text: string) {
	// NOTE: We can think about implentation of additional security configuration for argon2. Also we can pop up a SHA-512 and then hash it with argon2 to have better encryption without performance issues.
	const hashstr = await upash.hash(text)
	return hashstr
}

export async function verify(text: string, hash: string) {
	const match_argon2 = await upash.verify(hash, text)
	return match_argon2
}
