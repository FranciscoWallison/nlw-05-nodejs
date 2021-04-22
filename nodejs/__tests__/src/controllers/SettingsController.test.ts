import request from 'supertest';
import { http } from '../../../src/http';
import {connection} from '../../../src/database'
import { SettingsRepository } from '../../../src/repositories/SettingsRepository'

describe('Users', () => {
  beforeAll(async () => {    
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
  });

  it('Validar campos vazios Settings', async () => {
    const response = await request(http).post('/settings').send({
      chat: '',
      username: '',
    });

    expect(response.status).toBe(400);
  });


  it('Validar cadastro Settings', async () => {
    let setting = {
      chat: true,
      username: 'admin',
    }
    const response = await request(http).post('/settings').send(setting);
    expect(response.status).toBe(200);

    const settingsRepository = (await connection).getCustomRepository(SettingsRepository);
    const validSetting = await settingsRepository.findOne(setting as any);

    expect(setting).toMatchObject(
      {
        chat: (validSetting as any)?.chat,
        username: (validSetting as any)?.username
      }
    );
  });


  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});