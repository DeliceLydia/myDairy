import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let pool = {};
//DATABASE CONNECTION
pool = new Pool({
   connectionString: process.env.DATABASE_URL
});
pool.on('connect', ()=> {
   console.log('connected to the development db');
});

if (process.env.NODE_ENV === 'testing'){
    pool = new Pool({
       connectionString: process.env.TEST_DATABASE
    });
    pool.on('connect', ()=> {
       console.log('connected to the tests db');
    });
}
if (process.env.NODE_ENV === 'production'){
    pool = new Pool({
       connectionString: process.env.DB_URL
    });
    pool.on('connect', ()=> {
       console.log('connected to the production db');
    });
}
export default pool;

