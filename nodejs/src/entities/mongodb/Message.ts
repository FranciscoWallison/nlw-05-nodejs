import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    ObjectIdColumn,
    Generated,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
  
import { User } from './User';
  
@Entity()
class Message {
  @ObjectIdColumn()
  id_message: number;

  @Column()
  @Generated('uuid')
  id: string;

  @Column('varchar', {
    nullable: true
  })
  admin_id: string;

  @PrimaryColumn()
  user_id?: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "id"
  })
  user: User;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
  
  export { Message };