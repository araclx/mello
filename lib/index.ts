import express from 'express'
import getPort from 'get-port'

const app = express()
const port = 3000

app.get('/hey', (request, res) => res.json({ message: 'hey' }))

export const fn = (): string => 'foo'

export default app
