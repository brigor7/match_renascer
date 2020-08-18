import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => res.send({ Message: 'Server started!' }));
routes.post('/', (req, res) => {
  const user = req.body;
});
export default routes;
