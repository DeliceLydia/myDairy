import joi from 'joi';

const validateSignup = {
    validation(entry) {
        const schema = {
            firstName: joi.string().trim().required(),
            lastName: joi.string().trim().required(),
            email: joi.string().email({ minDomainAtoms: 2 }).trim().required(),
            password: joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).trim().required(),
            confirm_password: joi.string().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).trim().required()
        };
        return joi.validate(entry, schema);
    }
}
const ValidateSignin = {
    validation(returningUser) {
        const schema = {
            email: joi.string().email().required(),
            password: joi.string().required(),
        };
        return joi.validate(returningUser, schema);
    }

}

export { validateSignup, ValidateSignin };