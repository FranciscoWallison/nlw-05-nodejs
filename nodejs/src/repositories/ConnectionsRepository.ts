import { EntityRepository, Repository } from 'typeorm';

import { Connection } from '../entities';

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<typeof Connection> {}

export { ConnectionsRepository };