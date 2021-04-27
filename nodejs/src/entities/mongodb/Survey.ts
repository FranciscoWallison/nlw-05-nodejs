import {
  Column,
   CreateDateColumn,
   Entity,
   Generated,
   ObjectIdColumn 
  } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity()
class Survey {

  @ObjectIdColumn()
  id_survey: number;

  @Column()
  @Generated('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Survey };
