import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) =>
  res.send({ Message: 'Server Match_Renascer Started!' }),
);
routes.post('/', (req, res) => {
  const user = req.body;
  res.json(user);
});
export default routes;
