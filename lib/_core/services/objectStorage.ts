import multer from 'multer'
import minio from 'minio'

// NOTE: After hours wasted on testing multer with minio with usage of library for that (dedicated library for multer which provides minio integration) and trying to figure out how to use multer-s3 and connect it to minio, there I've found an one potential alternative on which we can take a look - https://docs.openio.io/latest/source/sandbox-guide/quickstart.html.

export const multerStorage = multer.memoryStorage()

// NOTE: There we can add helper functions that will create an easier interface for Minio usage,
// and to not actually make replicated code that much. Actually there I do not see any other solution.

export function uploadBinaryFileToMinio(file) {}