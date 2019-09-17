import entries from '../models/entriesModel';
import validateEntry from '../helpers/entryValidation';
import modifyEntry from '../helpers/modifyValidation';
import moment from 'moment';


class entry {
  static getAll(req, res) {
    if (!entries) {
      return res.status(404).json({
        status: 404,
        error: 'no entries found',
      });
    } else {
      return res.status(200).json({
        status: 200,
        data: entries
      });
    }
  }
  static getOneEntry(req, res) {
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
  static addNewEntry(req, res) {

    const { error } = validateEntry.validation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,

      });
    }
    const entryId = parseInt(entries.length + 1, 10);
    const entry = {
      entryId,
      created_on: moment().format('LL'),
      title: req.body.title,
      newEntry: req.body.newEntry,
    };
    entries.push(entry);

    res.status(201).json({
      status: 201,
      message: 'diary entry successfully posted',
      data: entry
    })
  }
  static modifyEntry(req, res) {

    const { error } = modifyEntry.validation(req.body);
    if (error) {
      return res.status(400).json({
        status: 400,
        error: error.details[0].message,

      });
    }
    const checkEntryId = entries.find(g => g.entryId === parseInt(req.params.entryId, 10));
    if (!checkEntryId) {
      return res.status(404).json({
        status: 404,
        message: 'entry with that entryId not found'
      });
    }
    if (checkEntryId) {
      checkEntryId.entry = req.body.entry;
      return res.status(200).send({
        status: 200,
        message: 'entry updated successfully',
        data: {
          entryId: checkEntryId.entryId,
          created_on: moment().format('LL'),
          entry: checkEntryId.entry,
        }
      })
    }
  }
    static deleteEntry(req, res) {
      const deleteOne = entries.find(d => d.entryId === parseInt(req.params.entryId, 10));
    if(!deleteOne) {
      return res.status(404).json ({
        status : 404,
        message : 'entry with that ID is not found',
      });
    }
    if(deleteOne){
      const index = entries.indexOf(deleteOne);
      entries.splice(index, 1);
      return res.status(200).json({
      status : 200,
      message : 'entry deleted successfully!'
        });
     }
    
  }
}
export default entry;