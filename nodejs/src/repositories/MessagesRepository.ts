import { EntityRepository, Repository } from 'typeorm';

import {Message as Message_ } from '../entities/Message';
import {Message as Message_mongo} from '../entities_mongodb/Message';

const Message = process.env.CONNECTION_DRIVE === 'mongodb' ? Message_mongo : Message_;

@EntityRepository(Message)
class MessagesRepository extends Repository<typeof Message> {}

export { MessagesRepository };