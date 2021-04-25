import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { User } from './User';
  import { ColumnNumericTransformer } from '../../database/transformer/ColumnNumericTransformer';


@Entity('surveys_users')
  class SurveyUser {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
  
    @Column()
    user_id: string;
  
    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
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

  }
  
  export { SurveyUser };
  