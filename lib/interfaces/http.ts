import express from 'express'
import compression from 'compression'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())
app.use(cors())
app.disable('x-powered-by')

app.get('/hey', (req: express.Request, res: express.Response) => res.json({ message: 'hey' }))

export default app
