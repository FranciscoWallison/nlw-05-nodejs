import { EntityRepository, Repository } from 'typeorm';

import { Setting } from '../entities';

@EntityRepository(Setting)
class SettingsRepository extends Repository<typeof Setting> {}

export { SettingsRepository };