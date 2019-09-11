import express from 'express';
import getAll from '../controllers/getAllEntry';
import getOneEntry from '../controllers/specificEntry';

const router = express.Router();

router.get('/api/v1/entries', getAll);
router.get('/api/v1/entries/:entryId', getOneEntry);


export default router;
