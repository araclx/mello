import express, { Request, Response } from 'express'
import multer from 'multer'
import { minioConfig } from 'interfaces/services/minio'
import * as Minio from 'minio'
import joi from 'joi'

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
const minio = new Minio.Client(minioConfig)

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
	minio.putObject('mello-photos', req.file?.originalname, req.file?.buffer, function (error, etag) {
		if (error) {
			return console.log(error)
		}
		console.log(etag)
		// let imageCDN = `https://${minioConfig.endpoint}/${minioConfig.bucket}/${req.file?.originalname}`
		let imageCDN = `http://localhost:1337/v1/hey/img/${req.file?.originalname}`
		res.json({ url: imageCDN, file: req.file })
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

const helloRouter = express.Router()

helloRouter.get('/', returnHello)
helloRouter.post('/', requestHello)
helloRouter.post('/img', upload.single('file'), uploadFile)
helloRouter.get('/img/:id', downloadFile)

export default helloRouter
