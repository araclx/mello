import upash from 'upash'
import argon2 from '@phc/argon2'

/* TODO: There we have a fucked problem with @phc/argon2 which ruins tests (not only in `ava` that we're using but with other solutions as well). I do not had time to resolve this at all so I decided to leave this crap for better days.

  Uncaught exception in __tests__/users.ts

  Error: Module did not self-register: '/Users/jay/Desktop/01_Source/mello/node_modules/argon2/build/Release/argon2.node'.

  › bindings (node_modules/bindings/bindings.js:112:48)
  › Object.<anonymous> (node_modules/argon2/argon2.js:3:37)

*/

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
