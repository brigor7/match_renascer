import { Router } from 'express';
import CreateChildrenService from '../service/createChildrenService';

const childrenRoutes = Router();

childrenRoutes.post('/', async (request, response) => {
  const { name, birthday, sex, likes } = request.body;
  const createChildren = new CreateChildrenService();
  const children = await createChildren.execute({ name, birthday, sex, likes });
  return response.json(children);
});

export default childrenRoutes;
