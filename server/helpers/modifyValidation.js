import joi from 'joi';

const modifyEntry = {
    validation(entry){
        const schema = {
            entry : joi.string().required()

        };
        return joi.validate(entry,schema);
    }
}
export default modifyEntry;