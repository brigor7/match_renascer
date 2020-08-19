import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('childrens')
class Children {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @Column()
  sex: string;

  @Column()
  likes: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Children;
