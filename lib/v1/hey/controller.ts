import { Request, Response } from 'express'
import joi from 'joi'

export async function returnHello(req: Request, res: Response): Promise<void> {
	res.json({ message: 'hey' })
}

export async function requestHello(req: Request, res: Response): Promise<void> {
	const { error, value } = joi
		.object({
			name: joi.string().required(),
		})
		.validate(req.body)

	if (error) {
		res.status(400).json({ error: error.message })
	} else {
		res.json({ message: `hello ${value.name}` })
	}
}
