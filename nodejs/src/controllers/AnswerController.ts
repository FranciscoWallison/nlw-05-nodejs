import { Request, Response } from 'express';
import { SurveysUsersService } from '../services/SurveysUsersService';

class AnswerController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { email } = request.query;

    try { 
    const surveysUsers = new SurveysUsersService();

    const survey_users = await surveysUsers.create(String(email), Number(value));

      return response.json(survey_users);
    } catch (err) {
      return response.status(400).json({ message: err.message });
    }

  }

  async showNps(request: Request, response: Response) {

    const surveysUsers = new SurveysUsersService();
    let value = await surveysUsers.showNps();
    
    return response.json(value);
  }
}

export { AnswerController };
