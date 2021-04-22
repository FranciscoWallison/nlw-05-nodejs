import request from 'supertest';
import { http } from '../../../src/http';
import {connection} from '../../../src/database'
import { MessagesRepository }from '../../../src/repositories/MessagesRepository';
import { UsersRepository }from '../../../src/repositories/UsersRepository';

describe('Users', () => {
  beforeAll(async () => {    
    const cn = await connection;
    await cn.dropDatabase();       
    await cn.runMigrations({
        transaction: "all"
    });
  });

  it('Validar criando Messages', async () => {
    const user = (await connection).getCustomRepository(UsersRepository)
                            .create({ email:"teste@teste.com" } as any);
    await (await connection).getCustomRepository(UsersRepository)
                            .save(user);
    let user_id = (user as any).id;

    const response = await request(http).post('/messages').send(
      {
        user_id: user_id,
        text: "Olá, preciso de ajuda ajudar!"
      }
    );
    expect(response.status).toBe(200);


    const response_error = await request(http).post('/messages').send(
      {
        user_id: "as1dd2a1sda-asdjansnsdjk-fghfghfg-111",
        text: "Olá, preciso de ajuda ajudar!"
      }
    );
    expect(response_error.status).toBe(400);
  });


  it('Validar mostrar Messages', async () => {
    const user = (await connection).getCustomRepository(UsersRepository)
                                    .create({ email:"teste@teste.com" } as any);
    await (await connection).getCustomRepository(UsersRepository)
                            .save(user);

    let id = (user as any).id;
    const response = await request(http).get(`/messages/${id}`);
    expect(response.status).toBe(200);

    const response_error = await request(http).get('/messages/as1dd2a1sda-asdjansnsdjk-fghfghfg-111');
    expect(response_error.status).toBe(400);

  });


  afterAll(async () => {
    const cn = await connection;
    await cn.dropDatabase();
  });
});