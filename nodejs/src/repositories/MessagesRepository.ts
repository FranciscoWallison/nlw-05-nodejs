import { EntityRepository, Repository } from 'typeorm';

import { Message } from '../entities';

@EntityRepository(Message)
class MessagesRepository extends Repository<typeof Message> {}

export { MessagesRepository };