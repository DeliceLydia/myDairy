import entries from '../models/entries';

const getOneEntry = (req,res)=> {
   const entry = entries.find(h => h.entryId === parseInt(req.params.entryId, 10));
   if (!entry) {
    res.status(404).json({
      status: 404,
      error: 'entry not found',
    });
  } else {
    res.status(200).json({
      status: 200,
      data: entry,
    });
  }
}
export default getOneEntry;