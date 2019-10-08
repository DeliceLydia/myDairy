import joi from 'joi';

const validateUsers = {
    validation(user){
        const schema = {
            title : joi.string().required(),
            newEntry : joi.string().required()
        };
        return joi.validate(user,schema);
    }
}
export default validateUsers;