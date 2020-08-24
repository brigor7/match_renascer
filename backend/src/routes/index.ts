import { Router } from 'express';
import userRouter from './user.routes';
import childrenRouter from './children.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/children', childrenRouter);

export default routes;
