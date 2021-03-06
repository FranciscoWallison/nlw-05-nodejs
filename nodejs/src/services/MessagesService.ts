import {connection}  from  '../database';

import { MessagesRepository } from '../repositories/MessagesRepository';
import { UsersRepository } from '../repositories/UsersRepository';

interface IMessageCreate {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesService {

  constructor() {
  }

  async create({ admin_id, user_id, text }: IMessageCreate) {
    let message_request = {
      admin_id: admin_id,
      user_id: user_id,
      text: text
    }

    let id = user_id;
    const userExists = await (await connection).getCustomRepository(UsersRepository)
                                            .findOne({ id } as any);

    if (!(userExists)) {
      throw new Error('User not exists.');
    }

    const message = (await connection).getCustomRepository(MessagesRepository).create(
        message_request as any
      );

    await (await connection).getCustomRepository(MessagesRepository).save(message);

    return message;
  }

  async listByUser(user_id: string) {

    let id = user_id;
    const userExists = await (await connection).getCustomRepository(UsersRepository)
    .findOne({ id } as any);

    if (!(userExists)) {
      throw new Error('User not exists.');
    }


    const list = await (await connection).getCustomRepository(MessagesRepository).find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}

export { MessagesService };