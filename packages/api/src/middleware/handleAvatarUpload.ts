import multer from 'multer';

export const handleAvatarUpload = multer({
    dest: 'temp/',
    limits: { fieldSize: 8 * 1024 * 1024 }
}).single('avatar');