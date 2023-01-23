import * as dotenv from 'dotenv'
dotenv.config()

import multer from 'multer'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

const multerConfig = {
  dest: path.resolve("src", "public", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("src", "public", "uploads"))
    },
    filename: (req, file, cb) => {
      const fileName = `${randomUUID()}-${file.originalname}`
      cb(null, fileName)
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ]
    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error("Invalid filetype."))
    }
  }
}

export const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  multerConfig
}
