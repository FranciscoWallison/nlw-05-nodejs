import { Request, Response } from 'express';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { AppError } from '../errors/AppError';
import {connection}  from  '../database';
import * as Yup from 'yup';

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const schema = Yup.object().shape({
      chat: Yup.string().required(),
      username: Yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

    const settingsRepository = (await connection).getCustomRepository(SettingsRepository);

    const setting = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(setting);

    return response.json(setting);
  }
}

export { SettingsController };