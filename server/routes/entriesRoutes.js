import express from 'express';
import auth from '../middleware/auth';
import entry from '../controllers/entriesController';


const router = express.Router();

router.get('/api/v1/entries', auth, entry.getAll);
router.get('/api/v1/entries/:id', auth, entry.getOneEntry);
router.post('/api/v1/entries', auth,entry.addNewEntry);
// router.put('/api/v1/entries/:entryId', entry.modifyEntry);
// router.delete('/api/v1/entries/:entryId', entry.deleteEntry);

export default router;
