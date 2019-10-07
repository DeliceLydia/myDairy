import pool from '../config/connect';


export const createTables = () => {
    const users = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        email VARCHAR(30) UNIQUE NOT NULL,
        password VARCHAR(300) NOT NULL,
        confirm_password VARCHAR(300) NOT NULL
    );`
    const entries = `
    CREATE TABLE IF NOT EXISTS entries(
        id SERIAL PRIMARY KEY,
        date VARCHAR (100) NOT NULL,
        title VARCHAR(20) NOT NULL,
        entry VARCHAR(1000) NOT NULL

    );`
    const queries = `${users};${entries}`;
    pool.query(queries).then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
    
};
export const dropTables = () => {
  const drop = `
      DROP TABLE IF EXISTS users CASCADE;
      DROP TABLE IF EXISTS entries CASCADE;
  `;
  const Queries = `${drop}`;
  pool.query(Queries).then((res) => {
      pool.end();
  })
      .catch((err) => {
          pool.end();
      });
};
require('make-runnable');