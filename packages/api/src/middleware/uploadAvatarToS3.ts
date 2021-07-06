import { Request, Response, NextFunction } from 'express'
import aws from 'aws-sdk'
import fs from 'fs'
import { AWS_ACCESS_KEY_ID, AWS_BUCKET, AWS_REGION, AWS_SECRET_ACCESS_KEY } from '../utils/env'

export const uploadAvatarToS3 = (request: Request, response: Response, next: NextFunction) => {
	aws.config.update({
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY,
		region: AWS_REGION,
	})

	const s3 = new aws.S3()

	const s3Params = {
		ACL: 'public-read',
		Bucket: AWS_BUCKET,
		Body: fs.createReadStream(request.file?.path as string),
		Key: `userAvatar/${request.file?.originalname}`,
	}

	s3.upload(s3Params, (err, pathToAvatar) => {
		if (err) return response.status(500).json({ error: err })
		if (pathToAvatar) {
			fs.unlinkSync(request.file?.path as string)
			request.body['avatar'] = pathToAvatar.Location
			return next()
		}
	})
}
