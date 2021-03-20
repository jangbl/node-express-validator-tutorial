import { body } from 'express-validator';

const schema = [
  body('email')
    .isEmail()
    .withMessage('email must contain a valid email address'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('password must be at least 5 characters long'),
];

export { schema as registerSchema };
