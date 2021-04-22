import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entities';

@EntityRepository(User)
class UsersRepository extends Repository<typeof User> {}

export { UsersRepository };