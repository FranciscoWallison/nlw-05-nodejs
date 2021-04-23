import {connection}  from  '../database';

import { UsersRepository } from '../repositories/UsersRepository';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository'

class SurveysUsersService {

  constructor() {
  }

  async create(email: string,value: number) {

    const userExists = await (await connection).getCustomRepository(UsersRepository)
            .findOne({ email } as any);

    if (!userExists) {
        return userExists;
    }

    let user_id = (userExists as any).id;

    const surveysUsersRepository = (await connection).getCustomRepository(SurveysUsersRepository);
    const surveyUser = surveysUsersRepository.create(
    { 
        value: Number(value),
        user_id: user_id
    } as any);
    await surveysUsersRepository.save(surveyUser);

    return surveyUser;
  }


  async showNps(){
    const surveysUsers = await (await connection).getCustomRepository(SurveysUsersRepository)
      .find({ order: { id: "DESC" } } as any);

    const detractor = surveysUsers.filter(
      (survey: any ) => survey.value >= 0 && survey.value <= 6,
    ).length;

    const promoters = surveysUsers.filter(
      (survey: any ) => survey.value >= 9 && survey.value <= 10,
    ).length;

    const passive = surveysUsers.filter(
      (survey: any ) => survey.value >= 7 && survey.value <= 8,
    ).length;

    const totalAnswers = surveysUsers.length;

    const calculate = Number(
      (((promoters - detractor) / totalAnswers) * 100).toFixed(2),
    );
console.log("surveysUsers", {
  detractor,
  promoters,
  passive,
  totalAnswers,
  nps: calculate,
});
    return {
      detractor,
      promoters,
      passive,
      totalAnswers,
      nps: calculate,
    }
  }

}

export { SurveysUsersService };