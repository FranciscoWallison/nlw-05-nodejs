import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    Generated,
    UpdateDateColumn,
    ObjectIdColumn,
    PrimaryColumn
  } from 'typeorm';
  import { v4 as uuidV4 } from 'uuid';
  
  import { User } from './User';
  
  @Entity()
  class Connection {
    @ObjectIdColumn()
    id_connection: number;

    @Column()
    @Generated('uuid')
    id: string;
  
    @Column('varchar', {
      nullable: true
    })
    admin_id: string;

    @Column()
    user_id?: string;

    @ManyToOne(type => User)
    @JoinColumn({
      name: "user_id",
      referencedColumnName: "id"
    })
    user: User;
  
    @Column()
    socket_id: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    constructor() {
      if (!this.id) this.id = uuidV4();
    }
  }
  
  export { Connection };