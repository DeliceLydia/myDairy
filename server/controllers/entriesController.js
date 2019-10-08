import validateEntry from '../helpers/userValidations';
import modifyEntry from '../helpers/modifyValidation';
import responseMessage from '../helpers/responses';
import moment from 'moment';


class entry {
  static getAll(req, res) {
    if (!entries) { return responseMessage.errorMessage(res, 404, 'no entries found'); }
    else { return responseMessage.successWithData(res, 200, 'entries found successfully', entries); }
  }
  static getOneEntry(req, res) {
    const entry = entries.find(h => h.entryId === parseInt(req.params.entryId));
    if (!entry) { return responseMessage.errorMessage(res, 404, 'entry not found') }
    else { return responseMessage.successWithData(res, 200, 'found entry successfully', entry); }
  }
  static addNewEntry(req, res) {

    const { error } = validateEntry.validation(req.body);
    if (error) { return responseMessage.errorMessage(res, 400, error.details[0].message); }

    const entryId = entries.length + 1;
    const { title, newEntry } = req.body;
    const entry = {
      entryId,
      created_on: moment().format('LL'),
      title,
      newEntry,
    };
    entries.push(entry);
    return responseMessage.successWithData(res, 201, 'diary entry successfully posted', {entryId, created_on: moment().format('LL'), title, newEntry });
  }
  static modifyEntry(req, res) {

    const { error } = modifyEntry.validation(req.body);
    if (error) { return responseMessage.errorMessage(res, 400, error.details[0].message); }
    const checkEntryId = entries.find(g => g.entryId === parseInt(req.params.entryId));

    if (!checkEntryId) {
      return responseMessage.errorMessage(res, 404, 'entry with that entryId not found');
    }

    if (checkEntryId) {
      title.entry = req.body.entry;
      checkEntryId.entry = req.body.entry;
      return responseMessage.successWithData(res, 200, 'entry updated successfully',{
        entryId: checkEntryId.entryId,
        created_on: moment().format('LL'), newEntry: checkEntryId.newEntry
      })
    }
  }
  static deleteEntry(req, res) {
    const deleteOne = entries.find(d => d.entryId === parseInt(req.params.entryId));
    if (!deleteOne) { return responseMessage.errorMessage(res, 404, 'entry with that ID is not found') }

    if (deleteOne) {
      const index = entries.indexOf(deleteOne);
      entries.splice(index, 1);
      return responseMessage.successWithNoData(res, 200, 'entry deleted successfully!')
    }
  }
}
export default entry;