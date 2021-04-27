import {
  Entity, 
  Generated, 
  ObjectIdColumn,
  CreateDateColumn,
  Column,
  PrimaryGeneratedColumn
} 
from "typeorm";
import { v4 as uuidV4 } from 'uuid';
@Entity()
class User {
 
  @ObjectIdColumn()
  id_user: number;

  @Column()
  @Generated('uuid')
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { User };