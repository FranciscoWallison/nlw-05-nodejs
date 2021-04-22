import { EntityRepository, Repository } from 'typeorm';

import {Connection as Connection_ } from '../entities/Connection';
import {Connection as Connection_mongo} from '../entities_mongodb/Connection';

const Connection = process.env.CONNECTION_DRIVE === 'mongodb' ? Connection_mongo : Connection_;

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<typeof Connection> {}

export { ConnectionsRepository };