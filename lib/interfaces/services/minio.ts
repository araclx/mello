import * as Minio from 'minio'
import consola from 'consola'
import { MINIO_ACCESSKEY, MINIO_SECRETKEY, MINIO_HOST } from 'utils/env'

export const minioConfig = {
	endPoint: MINIO_HOST,
	port: 9000,
	useSSL: false,
	accessKey: MINIO_ACCESSKEY,
	secretKey: MINIO_SECRETKEY,
}

const minio = new Minio.Client(minioConfig)

const logger = consola.withScope('minio')
if (process.env.NODE_ENV === 'CI') logger.pause()

export function minioService() {
	// Check actual instance of mello-photos, and if there is no such bucket create a new one.
	minio.bucketExists('mello-photos', function (err, exist) {
		if (err) logger.error(err)

		if (exist) return logger.warn('bucket "mello-photos" already exitsts.')

		if (!exist) {
			minio.makeBucket('mello-photos', 'eu', function (err) {
				if (err) return logger.error(err)
				logger.success('successfully created bucket "mello-photos"')
			})
		}
	})

	// List all available buckets.
	minio.listBuckets(function (err, buckets) {
		if (err) return logger.error(err)
		logger.info('listing available buckets...')
		logger.log(buckets)
	})
}
