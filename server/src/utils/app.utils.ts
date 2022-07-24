import { HttpStatus, ValidationPipe } from "@nestjs/common";

const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
const PASSWORD_RULE_MESSAGE = 'Пароль должен включать в себя хотя бы 1 символ старшего регистра, младшего и хотя бы 1 спецсимвол. Пароль должен иметь больше 8 символов'
const VALIDATION_PIPE = new ValidationPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})

export const REGEX = {
  PASSWORD_RULE,
}

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
}

export const SETTINGS = {
  VALIDATION_PIPE,
}