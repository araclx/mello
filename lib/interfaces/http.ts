import express from 'express'
import compression from 'compression'
import cors from 'cors'
import joi from 'joi'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.get('/hey', (req: express.Request, res: express.Response) => res.json({ message: 'hey' }))

app.post('/hey', async (req: express.Request, res: express.Response) => {
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
})

export default app
