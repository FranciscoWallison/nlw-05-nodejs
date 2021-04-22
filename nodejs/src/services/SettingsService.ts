import {connection}  from  '../database';

import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  constructor() {
  }
  async create({ chat, username }: ISettingsCreate) {
    let setting_request = {
        chat: chat,
        username: username,
    }
    
    const settingsAlreadyExists = await (await connection).getCustomRepository(SettingsRepository)
                                          .findOne(setting_request as any);
    if (settingsAlreadyExists) {
      throw new Error('Settings already exists.');
    }
    const setting = (await connection).getCustomRepository(SettingsRepository)
                      .create(setting_request as any);

    await (await connection).getCustomRepository(SettingsRepository)
                      .save(setting);

    return setting;
  }
}

export { SettingsService };