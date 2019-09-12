import express from 'express';
import entry from '../controllers/entriesController';


const router = express.Router();

router.get('/api/v1/entries', entry.getAll);
router.get('/api/v1/entries/:entryId', entry.getOneEntry);
router.post('/api/v1/entries', entry.addNewEntry);


export default router;
