import {connection}  from  '../database';
import { SettingsRepository } from '../repositories/SettingsRepository';
import {Setting as Setting_ } from '../entities/Setting';
import {Setting as Setting_mongo} from '../entities_mongodb/Setting';

const Setting = process.env.CONNECTION_DRIVE === 'mongodb' ? Setting_mongo : Setting_;

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

  async findByUsername(username: string) {
    const settings = await (await connection).getCustomRepository(SettingsRepository)
                            .findOne({ username } as any);
    
    if(settings === undefined)
      throw new Error('User not exists.');

    return settings;
  }

  async update(username: string, chat: boolean) {

    const settings = await (await connection).getCustomRepository(SettingsRepository)
                            .findOne({ username } as any);
    
    if(settings === undefined)
      throw new Error('User not exists.');
      
    await (await connection).getCustomRepository(SettingsRepository)
      .createQueryBuilder()
      .update(Setting)
      .set({ chat } as any)
      .where('username = :username', { username })
      .execute();
  }

}

export { SettingsService };