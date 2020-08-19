import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('children_details')
class ChildrenDetail {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  year: Date;

  @Column()
  biography: string;

  @Column()
  shoes_number: string;

  @Column()
  clothes_number: string;
  @Column()
  avatar: string;

  @Column()
  photo_gifts: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default ChildrenDetail;
