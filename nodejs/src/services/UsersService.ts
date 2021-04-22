import {connection}  from  '../database';

import { UsersRepository } from '../repositories/UsersRepository';

class UsersService {

  constructor() {
  }

  async create(email: string) {
    const userExists = await (await connection).getCustomRepository(UsersRepository)
                            .findOne({ email } as any);

    if (userExists) {
      return userExists;
    }

    const user = (await connection).getCustomRepository(UsersRepository)
                            .create({ email } as any);

    await (await connection).getCustomRepository(UsersRepository)
                            .save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await (await connection).getCustomRepository(UsersRepository)
                            .findOne({ email } as any);

    return user;
  }

}

export { UsersService };