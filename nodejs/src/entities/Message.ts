import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    // PrimaryColumn,
    PrimaryGeneratedColumn
  } from 'typeorm';
//   import { v4 as uuidV4 } from 'uuid';
  
  import { User } from './User';
  
  @Entity('messages')
  class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    
    @Column('varchar', {
      nullable: true
    })
    admin_id: string;
  
    @Column()
    user_id: string;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @Column()
    text: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    // constructor() {
    //   if (!this.id) this.id = uuidV4();
    // }
  }
  
  export { Message };