import express from 'express';
import auth from '../middleware/auth';
import users from '../controllers/usersControllers';

const user_router = express.Router();

user_router.post('/api/v1/auth/signup', users.signup);

export default user_router;