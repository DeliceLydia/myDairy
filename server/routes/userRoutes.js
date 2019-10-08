import express from 'express';
import users from '../controllers/usersControllers';

const user_router = express.Router();

user_router.post('/api/v1/auth/signup', users.signup);
user_router.post('/api/v1/auth/signin', users.signin);

export default user_router;