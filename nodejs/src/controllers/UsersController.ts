import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';
import * as Yup from 'yup';
import { AppError } from '../errors/AppError';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const schema = Yup.object().shape({
        email: Yup.string()
            .email().required(),
    });
  
      try {
        await schema.validate(request.body, { abortEarly: false });
      } catch (error) {
        throw new AppError(error);
      }

    const usersService = new UsersService();

    const user = await usersService.create(email);

    return response.json(user);
  }
}

export { UsersController };