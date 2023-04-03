import joi from "joi";

const doctorSchema = joi.object({
    name: joi.string().min(2).required(),
    crm: joi.string().min(8).required(),
    password: joi.string().required(),
    spciality: joi.string().min(2).max(30).required(),
    location: joi.string().required(),
  });

  const signin = joi.object({
    crm: joi.string().min(8).required(),
    password: joi.string().required(),
  });