import express, { Request, Response } from 'express'
import multer from 'multer'
import { minioConfig } from 'interfaces/services/minio'
import * as Minio from 'minio'
import joi from 'joi'
import crypto from 'crypto'
import { HOST, MELLO_PORT } from 'utils/env'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const minio = new Minio.Client(minioConfig)

const docs = require('../../postman/schemas/schema.json')

export async function returnHomepage(req: Request, res: Response): Promise<void> {
	res.json({
		apiVersion: 'dev',
		vendor: 'com.araclx.mello',
		docs: docs,
	})
}

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

export async function uploadFile(req: Request, res: Response): Promise<void> {
	if (req.file?.originalname) {
		req.file.originalname =
			crypto
				.createHash("sha256")
				.update(req.file.originalname + Date.now())
				.digest('hex') +
			'.' +
			req.file.mimetype.split('/')[1]
	}

	minio.putObject('mello-photos', req.file?.originalname, req.file?.buffer, function (error, etag) {
		if (error) {
			res.status(400).json({ error: error.message })
		} else {
			let imageCDN = `http://${HOST}:${MELLO_PORT}/v1/hey/img/${req.file?.originalname}`
			res.status(201).json({ url: imageCDN, etag: etag })
		}
	})
}

export async function downloadFile(req: Request, res: Response): Promise<void> {
	minio.getObject('mello-photos', req.params.id, function (error, stream) {
		if (error) {
			console.log(error)
			res.status(404).json({ error: error.message })
		}
		stream.pipe(res)
	})
}

export async function deleteFile(req: Request, res: Response): Promise<void> {}

const helloRouter = express.Router()

helloRouter.get('/', returnHello)
helloRouter.post('/', requestHello)
helloRouter.post('/img', upload.single('file'), uploadFile)
helloRouter.get('/img/:id', downloadFile)

export default helloRouter

const defaultRouter = express.Router()

defaultRouter.get('/', returnHomepage)

export { defaultRouter }
