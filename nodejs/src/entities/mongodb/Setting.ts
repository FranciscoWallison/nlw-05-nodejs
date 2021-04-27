import {
    Entity, 
    Generated, 
    ObjectIdColumn,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    Column} 
from "typeorm";
// @PrimaryGeneratedColumn('uuid')
import { v4 as uuidV4 } from 'uuid';
@Entity()
class Setting {

    @ObjectIdColumn()
    id_setting: number;

    @Column()
    @Generated('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}
  
export { Setting };