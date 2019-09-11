import express from 'express';
import getAll from '../controllers/getAllEntry';

const router = express.Router();

router.get('/api/v1/entries', getAll);

export default router;
