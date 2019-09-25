import joi from 'joi';

const validateEntry = {
    validation(entry){
        const schema = {
            title : joi.string().required(),
            newEntry : joi.string().required()

        };
        return joi.validate(entry,schema);
    }
}
export default validateEntry;