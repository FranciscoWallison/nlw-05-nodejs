import {
    Entity, 
    ObjectID, 
    ObjectIdColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Column} 
from "typeorm";

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