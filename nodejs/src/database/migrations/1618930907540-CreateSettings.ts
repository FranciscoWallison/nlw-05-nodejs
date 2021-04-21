import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSettings1618930907540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'settings',
              columns: [
                {
                  name: 'id',
                  isPrimary: true,
                  type: "varchar",    
                  generationStrategy: 'uuid',
                  default:  process.env.CONNECTION_DRIVE === 'mysql' ? `(UUID_TO_BIN(UUID(), TRUE))` : 'uuid_generate_v4()'
                },
                {
                  name: 'username',
                  type: 'varchar',
                },
                {
                  name: 'chat',
                  type: 'boolean',
                  default: true,
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('settings');
    }

}
