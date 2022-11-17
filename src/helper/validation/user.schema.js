const joi = require("@hapi/joi");

const schema = {
    user : joi.object({
        name: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        confirmpassword: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required()
    })
};

module.exports = schema;