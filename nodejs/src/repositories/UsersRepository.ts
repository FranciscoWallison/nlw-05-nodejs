import { EntityRepository, Repository } from 'typeorm';

import {User as User_ } from '../entities/User';
import {User as User_mongo} from '../entities_mongodb/User';

const User = process.env.CONNECTION_DRIVE === 'mongodb' ? User_mongo : User_;

@EntityRepository(User)
class UsersRepository extends Repository<typeof User> {}

export { UsersRepository };