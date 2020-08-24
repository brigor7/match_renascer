import Children from '../models/Children';
import { getRepository } from 'typeorm';

interface RequestBodyDTO {
  name: string;
  birthday: Date;
  sex: string;
  likes: string;
}
export default class CreateChildrenService {
  public async execute({
    name,
    birthday,
    sex,
    likes,
  }: RequestBodyDTO): Promise<Children> {
    const childrenRepository = getRepository(Children);
    const checkChildrenExists = childrenRepository.find({
      where: [{ name }, { birthday }],
    });
    if (!checkChildrenExists) {
      throw new Error('Criança já cadastrada.');
    }

    const children = childrenRepository.create({
      name,
      birthday,
      sex,
      likes,
    });
    await childrenRepository.save(children);

    return children;
  }
}
