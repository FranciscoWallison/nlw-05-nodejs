import { EntityRepository, Repository } from 'typeorm';

import { SurveyUser } from '../entities';

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<typeof SurveyUser> {}

export { SurveysUsersRepository };
