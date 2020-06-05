import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Point } from '../point/point.entity';

@Entity({ name: 'item' })
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Point,
    point => point.name,
  )
  @JoinColumn()
  points: Point[];
}
