import {
    Entity, 
    ObjectID, 
    ObjectIdColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column} 
from "typeorm";
// @PrimaryGeneratedColumn('uuid')
// import { v4 as uuidV4 } from 'uuid';
@Entity('settings')
class Setting {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    // constructor() {
    //     if (!this.id) this.id = uuidV4();
    // }
}
  
export { Setting };