import { EntityRepository, Repository, MongoEntityManager, MongoRepository } from 'typeorm';

import { Connection } from '../entities';

@EntityRepository(Connection)
class ConnectionsRepository extends MongoRepository<typeof Connection> {}

export { ConnectionsRepository };