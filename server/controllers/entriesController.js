import entries from '../models/entriesModel';
import validateEntry from '../helpers/entryValidation';
import moment from 'moment';


class entry{
    static getAll (req, res){
        if(!entries) {
            return res.status(404).json({
                status: 404, 
                error: 'no entries found',
              });
        } else {
            return res.status(200).json({
                status:200,
                data: entries
            });
        }
}
    static getOneEntry (req, res){
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
    static addNewEntry (req, res){

      const { error } = validateEntry.validation(req.body);
      if (error) {
       return res.status(400).json({
          status: 400,
          error: error.details[0].message,
    
        });
    }
    const entryId = parseInt(entries.length +1, 10);
    const entry = {
      entryId,
      created_on : moment().format('LL'),
      title : req.body.title,
      newEntry : req.body.newEntry,
    };
    entries.push(entry);

    res.status(201).json({
      status : 201,
      message : 'diary entry successfully posted',
      data : entry
    })
  }
}
 export default entry;