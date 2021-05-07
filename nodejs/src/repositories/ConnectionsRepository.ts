import { EntityRepository, MongoRepository } from 'typeorm';

import { Connection } from '../entities';

@EntityRepository(Connection)
class ConnectionsRepository extends MongoRepository<typeof Connection> {}

export { ConnectionsRepository };