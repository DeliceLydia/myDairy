import entries from '../models/entries';

const getAll =(req, res) =>{
    if(!entries) {
        return res.status(404).json({
            status: 404, 
            error: 'no entries found',
          });
    } else {
        return res.status(200).json({
            status:200,
            data: entries
        })
    }
 }
 export default getAll;