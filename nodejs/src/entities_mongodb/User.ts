import {
  Entity, 
  ObjectID, 
  ObjectIdColumn,
  CreateDateColumn,
  Column} 
from "typeorm";

@Entity('users')
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

//   constructor() {
//     if (!this.id) this.id = uuidV4();
//   }
}

export { User };