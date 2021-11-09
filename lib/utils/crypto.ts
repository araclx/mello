import aes from 'aes-js'
import argon2 from 'argon2'
import crypto from 'crypto'
import cyptojs from 'crypto-js'

// TODO: Think about good encryption here

// Temporary experimental function, should be not used irl.
export async function hash(text: string) {
	let hashedMessage = await argon2.hash(text)
	return hashedMessage
}

async function encrypt(text: string, key: string) {}
async function decrypt(text: string, key: string) {}
async function compare(encryped: string, plain: string) {}
