import joi from 'joi';

const validateSignup = {
    validation(entry) {
        const schema = {
            firstname: joi.string().trim().required(),
            lastname: joi.string().trim().required(),
            email: joi.string().email({ minDomainAtoms: 2 }).trim().required(),
            password: joi.string().trim().required(),
        };
        return joi.validate(entry, schema);
    }
}
const validateSignin = {
    validation(returningUser) {
        const schema = {
            email: joi.string().email().required(),
            password: joi.string().required(),
        };
        return joi.validate(returningUser, schema);
    }
}
export { validateSignup, validateSignin };