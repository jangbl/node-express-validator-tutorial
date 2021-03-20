import express, { Request, Response, Router } from 'express';
import { validateRequestSchema } from '../middleware/validate-request-schema';
import { registerSchema } from '../schema/register-schema';

const rootRouter = Router();
rootRouter.post(
  '/register',
  registerSchema,
  validateRequestSchema,
  (req: Request, res: Response) => {
    res.sendStatus(201);
  }
);

export { rootRouter as router };
