import { getRepository } from 'typeorm';
import User from '../models/User';

interface RequestBodyDTO {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export default class CreateUserService {
  public async execute({
    name,
    email,
    password,
    isAdmin,
  }: RequestBodyDTO): Promise<User> {
    const userRepository = getRepository(User);
    const checkUserExists = await userRepository.find({ where: { email } });
    if (!checkUserExists) {
      throw new Error('Usuário ou senha inválidos');
    }
    const user = userRepository.create({
      name,
      email,
      password,
      isAdmin,
    });
    await userRepository.save(user);

    return user;
  }
}
