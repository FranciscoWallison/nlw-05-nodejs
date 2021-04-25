import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  ObjectIdColumn,
  Generated
} from 'typeorm';
import { Survey } from './Survey';
import { User } from './User';
import { ColumnNumericTransformer } from '../../database/transformer/ColumnNumericTransformer';
import { v4 as uuidV4 } from 'uuid';

@Entity('surveys_users')
class SurveyUser {
  @ObjectIdColumn()
  id_survey: number;

  @Column()
  @Generated('uuid')
  id: string;

  @ManyToOne(type => User)
  @JoinColumn({
    name: "user_id",
    referencedColumnName: "user_id"
  })
  user: User;
  
  @Column('numeric', {
    precision: 7,
    scale: 2,
    transformer: new ColumnNumericTransformer(),
    nullable: true
  })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}
  
  export { SurveyUser };
  