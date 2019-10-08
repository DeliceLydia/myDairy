import validateEntry from '../helpers/entriesValidations';
import modifyEntry from '../helpers/modifyValidation';
import responseMessage from '../helpers/responses';
import moment from 'moment';
import sql from '../helpers/query';
import pool from '../config/connect';


class entry {
  static async getAll(req, res) {
    const entry = await pool.query(sql.getAll);
    if (!entry.rows[0]) 
    { return responseMessage.errorMessage(res, 404, 'no entries found'); }
    else { return responseMessage.successWithData(res, 200, 'entries found successfully', entry.rows)}; 
  }
  
  static async getOneEntry(req, res) {
    const id = req.params.id;
    const {rows} = await pool.query(sql.findEntrybyId, [id]);
    if (!rows.length > 0){ return responseMessage.errorMessage(res, 404, 'entry not found') }
    else { return responseMessage.successWithData(res, 200, 'found entry successfully', rows[0]); }
  }
  
  static async addNewEntry(req, res) {

    const { error } = validateEntry.validation(req.body);
    if (error) { return responseMessage.errorMessage(res, 400, error.details[0].message); }

    const { title, entry } = req.body;
    const date = moment().format('LL');
    const result = await pool.query(sql.postEntry, [date, title, entry]);
    return responseMessage.successUser(res, 'entry posted successfully', 201, {date, title, entry});
}
  // static async modifyEntry(req, res) {

  //   const { error } = modifyEntry.validation(req.body);
  //   if (error) { return responseMessage.errorMessage(res, 400, error.details[0].message); }
  //   const entryId = req.params.id;
  //   const findEntry = await pool.query(sql.findEntrybyId, [entryId]);
    
  //   if (findEntry.rowCount === 0) {
  //     return responseMessage.errorMessage(res, 404, 'entry with that entryId not found');
  //   }
  //   if (checkEntryId) {
  //     title.entry = req.body.entry;
  //     checkEntryId.entry = req.body.entry;
  //     return responseMessage.successWithData(res, 200, 'entry updated successfully',{
  //       entryId: checkEntryId.entryId,
  //       created_on: moment().format('LL'), newEntry: checkEntryId.newEntry
  //     })
  //   }
  // }
  // static deleteEntry(req, res) {
  //   const deleteOne = entries.find(d => d.entryId === parseInt(req.params.entryId));
  //   if (!deleteOne) { return responseMessage.errorMessage(res, 404, 'entry with that ID is not found') }

  //   if (deleteOne) {
  //       const index = entries.indexOf(deleteOne);
  //     entries.splice(index, 1);
  //     return responseMessage.successWithNoData(res, 200, 'entry deleted successfully!')
  //   }
  // }
}
export default entry;