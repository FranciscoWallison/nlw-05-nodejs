import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSurveysUsers1619104193089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'surveys_users',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: "varchar",    
            generationStrategy: 'uuid',
            default:  process.env.CONNECTION_DRIVE === 'mysql' ? `(UUID_TO_BIN(UUID(), TRUE))` : 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'value',
            type: 'numeric',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKSurveysUser',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('surveys_users');
  }
}
