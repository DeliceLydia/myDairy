const sql = {};

const addUser = ` INSERT INTO users(firstName, lastName, email, password, confirm_password) 
VALUES ( $1, $2, $3, $4, $5)  ON CONFLICT DO NOTHING returning * `;









sql.addUser = addUser;