const sql = {};

const addUser = `INSERT INTO users(firstName, lastName, email, password) 
VALUES ( $1, $2, $3, $4) Returning*`; 
const findUser =  `SELECT * FROM users WHERE email = $1`;
const postEntry = `INSERT INTO entries (date, title, entry)
 VALUES ($1, $2, $3) RETURNING *`;
const getAll = `SELECT * FROM entries`;
const findEntrybyId = `SELECT * FROM entries WHERE id = $1`;
const updateEntry = 'UPDATE entries SET entry = $1  WHERE id = $2';



sql.addUser = addUser;
sql.findUser = findUser;
sql.postEntry = postEntry;
sql.getAll = getAll;
sql.findEntrybyId = findEntrybyId;
sql.updateEntry = updateEntry;

export default sql;