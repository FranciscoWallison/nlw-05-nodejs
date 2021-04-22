import request from 'supertest';
import { http } from '../../../src/http';
import {connection} from '../../../src/database'

describe('Users', () => {
  beforeAll(async () => {    
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
  });

  it('Validar cadastro de Usuário', async () => {
    const response = await request(http).post('/users').send({
      email: "franciscowallison@gmail.com"
    });
    expect(response.status).toBe(200);

    const response_error = await request(http).post('/users').send({});
    expect(response_error.status).toBe(400);

    let valid_email = response.body;
    expect((valid_email as any).email).toEqual("franciscowallison@gmail.com");

  });

  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});