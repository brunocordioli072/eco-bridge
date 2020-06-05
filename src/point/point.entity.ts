import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Item } from 'src/item/item.entity';

@Entity({ name: 'point' })
export class Point {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;

  @Column({ type: 'varchar', length: 300 })
  whatsapp: string;

  @Column({ type: 'varchar', length: 300 })
  lat: number;

  @Column({ type: 'varchar', length: 300 })
  log: number;

  @Column({ type: 'varchar', length: 300 })
  city: string;

  @Column({ type: 'varchar', length: 300 })
  uf: string;
  @ManyToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => Item,
    item => item.title,
  )
  @JoinTable()
  items: Item[];
}
