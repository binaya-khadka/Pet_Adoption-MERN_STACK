import multer from 'multer';
import fs from 'fs';

const uploadDirectory = './public/uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(uploadDirectory)) {
      try {
        fs.mkdirSync(uploadDirectory, { recursive: true });
        console.log('Upload directory created:', uploadDirectory);
      } catch (error) {
        console.error('Error creating directory:', error);
        return cb(error, null);
      }
    }
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

export { upload };
