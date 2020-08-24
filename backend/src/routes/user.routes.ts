import { Router } from 'express';
import CreateUserService from '../service/createUserService';

const userRoutes = Router();

userRoutes.post('/', async (request, response) => {
  const { name, email, password, isAdmin } = request.body;
  const createUser = new CreateUserService();
  const user = await createUser.execute({ name, email, password, isAdmin });
  delete user.password;
  return response.json(user);
});

userRoutes.get('/', async (req, res) => {});

userRoutes.put('/', (req, res) => {});
userRoutes.patch('/', (req, res) => {});

export default userRoutes;
