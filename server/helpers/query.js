const sql = {};

const addUser = `INSERT INTO users(firstName, lastName, email, password) 
VALUES ( $1, $2, $3, $4) Returning*`; 
const findUser =  `SELECT * FROM users WHERE email = $1`;









sql.addUser = addUser;
sql.findUser = findUser;

export default sql;