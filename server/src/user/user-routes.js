import express from 'express';
import * as userHandler from './user-handler.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import cors from 'cors';

const router = express.Router();

router.use(cors());

router.get('/', verifyToken, userHandler.getAllUserHandler);

router.post('/', userHandler.createUserHandler);

router.post('/login', userHandler.loginHandler);

export { router };
