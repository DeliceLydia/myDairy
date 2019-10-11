import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import pool from '../config/connect';
import {validateSignup, validateSignin} from '../helpers/userValidations';
import responseMessage from '../helpers/responses';
import sql from '../helpers/query';

dotenv.config();

class users{
    static async signup(req, res){
        const { error } = validateSignup.validation(req.body);
        if (error) {
            return responseMessage.errorMessage(res, 400, error.details[0].message);
        }
        const values = req.body.email;
        const user = await pool.query(sql.findUser, [values]);
        if (user.rows[0]){
           return responseMessage.errorMessage(res, 400, 'email taken');
          }
        const hash = bcrypt.hashSync(req.body.password.trim(),10);
          const newUser = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email, 
              password: hash
            };
          const result = await pool.query(sql.addUser,[newUser.firstName, newUser.lastName, newUser.email, newUser.password]);
          const {id, firstName, lastName, email,} = result.rows[0];
          const payload ={id, firstName, lastName, email}
          const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1year'});
          return responseMessage.successWithData(res, 201, 'user added successfully',token, {firstName, lastName, email})
        }
    static async signin(req, res){
      const { error } = validateSignin.validation(req.body);
      if (error) {
          return responseMessage.errorMessage(res, 400, error.details[0].message);
      }
      const values = req.body.email.trim();
      const {rows} = await pool.query(sql.findUser, [values]);
      if(!rows[0]) {
        return responseMessage.errorMessage(res, 404, 'incorrect email or password');
      }
      const password = bcrypt.compareSync(req.body.password.trim(), rows[0].password);
      if(!password) {
        return responseMessage.errorMessage(res, 404, 'incorrect email or password');
      }
      const { id,firstName, lastName, email} = rows[0];
      const payload = {
        id,
        firstName,
        lastName,
        email,
      };
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
      return responseMessage.successWithData(res, 200, 'user founded successfully', token, {email});
    }
}
export default users;
