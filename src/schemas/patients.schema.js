import joi from "joi";

const patientSchema = joi.object({
  name: joi.string().min(2).required(),
  cpf: joi.string().min(11).max(11).required(),
  password: joi.string().required(),
});

const signin = joi.object({
    cpf: joi.string().min(11).max(11).required(),
    password: joi.string().required(),
  });