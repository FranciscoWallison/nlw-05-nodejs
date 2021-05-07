import request from 'supertest';
import { http } from '../../../src/http';
import {connection} from '../../../src/database'
import { SettingsRepository } from '../../../src/repositories/SettingsRepository'

describe('Settings', () => {
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


  it('Validar Settings está ativo', async () => {

    const response = await request(http).get('/settings/admin');
    expect(response.status).toBe(200);

    const response_error = await request(http).get('/settings');
    expect(response_error.status).toBe(404);

    const response_exit = await request(http).get('/settings/anwkjnajknsdkjansdajsnkn');
    expect(response_exit.status).toBe(400);
  });


  it('Validar Settings ativando', async () => {
    let setting = {
      chat: true,
    }
    const response = await request(http).put('/settings/admin').send(setting);
    expect(response.status).toBe(200);

    const response_error = await request(http).put('/settings').send(setting);
    expect(response_error.status).toBe(404);

    let setting_exit = {}
    const response_exit = await request(http).put('/settings/admin').send(setting_exit);
    expect(response_exit.status).toBe(400);
  });

  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});