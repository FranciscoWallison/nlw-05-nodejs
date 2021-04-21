import { Request, Response } from 'express';

import { MessagesService } from '../services/MessagesService';
import { AppError } from '../errors/AppError';
import * as Yup from 'yup';

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body;

    const schema = Yup.object().shape({
      // admin_id: Yup.string().required(),
      user_id: Yup.string().required(),
      text: Yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }
      

    const messagesService = new MessagesService();

    const message = await messagesService.create({ admin_id, user_id, text });

    return response.json(message);
  }

  async showByUser(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

    const messagesService = new MessagesService();

    const messages = await messagesService.listByUser(id);

    return response.json(messages);
  }
}

export { MessagesController };