import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

//   constructor() {
//     if (!this.id) this.id = uuidV4();
//   }
}

export { User };