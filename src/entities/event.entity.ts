import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TypeEvent } from './typeEvent.entity';
import { User } from './user.entity';
 
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  participants: number;

  @Column()
  startDate: string;

  @Column() // horas
  duration: number;

  @ManyToOne(
    type => TypeEvent,
    typeEvent => typeEvent.id,
  )
  @JoinColumn({ name: 'fk_type' })
  typeEvent: TypeEvent;

  @ManyToOne(
    type => User,
    user => user.id,
  )
  @JoinColumn({ name: 'fk_user' })
  user: User;
}
