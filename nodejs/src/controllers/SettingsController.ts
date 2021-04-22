import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';
import { AppError } from '../errors/AppError';
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

    let setting_request = {
      chat: chat,
      username: username,
    }
    const settingsService = new SettingsService();
    try {
      const setting = await settingsService.create(setting_request);

      return response.json(setting);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingsService();

    try {
      const setting = await settingsService.findByUsername(username);

      return response.json(setting);
    } catch (err) {
      return response.status(400).json({ message: err.message, chat: false });
    }

    
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    try {
      await settingsService.update(username, chat);

      return response.send();
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }

  }

}

export { SettingsController };