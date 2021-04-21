import { EntityRepository, Repository } from 'typeorm';

import {Setting as Setting_ } from '../entities/Setting';
import {Setting as Setting_mongo} from '../entities_mongodb/Setting';

const Setting = process.env.CONNECTION_DRIVE === 'mongodb' ? Setting_mongo : Setting_;

@EntityRepository(Setting)
class SettingsRepository extends Repository<typeof Setting> {}

export { SettingsRepository };