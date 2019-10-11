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
    else { return responseMessage.successUser(res,'entries found successfully', 200, entry.rows)}; 
  }
  
  static async getOneEntry(req, res) {
    const id = req.params.id;
    const {rows} = await pool.query(sql.findEntrybyId, [id]);
    if (!rows.length > 0){ return responseMessage.errorMessage(res, 404, 'entry not found') }
    else { return responseMessage.successUser(res,'found entry successfully',200, rows[0]); }
  }
  
  static async addNewEntry(req, res) {

    const { error } = validateEntry.validation(req.body);
    if (error) { return responseMessage.errorMessage(res, 400, error.details[0].message); }

    const { title, entry } = req.body;
    const date = moment().format('LL');
    const result = await pool.query(sql.postEntry, [date, title, entry]);
    return responseMessage.successUser(res, 'entry posted successfully', 201, {date, title, entry});
}
  static async modifyEntry(req, res) {

    const { error } = modifyEntry.validation(req.body);
    if (error) { return responseMessage.errorMessage(res, 400, error.details[0].message); }
    const entryId = parseInt(req.params.id);
    const checkEntryId = await pool.query(sql.findEntrybyId, [entryId]);
    if (checkEntryId.rowCount===0) {
      return responseMessage.errorMessage(res, 404, 'entry with that Id not found');
    }
    await pool.query(sql.updateEntry, [req.body.entry, entryId]);
   return responseMessage.successWithData(res, 200, 'entry updated successfully',{
        id: checkEntryId.rows[0].id,
        date: checkEntryId.rows[0].date,
        title: checkEntryId.rows[0].title,
        entry : req.body.entry
      })
    }
  }
export default entry;
