import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619026081041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'messages',
            columns: [
              {
                name: 'id',
                isPrimary: true,
                type: "varchar",    
                generationStrategy: 'uuid',
                default:  process.env.CONNECTION_DRIVE === 'mysql' ? `(UUID_TO_BIN(UUID(), TRUE))` : 'uuid_generate_v4()'
              },
              {
                name: 'admin_id',
                type: 'varchar',
                isNullable: true,
              },
              {
                name: 'user_id',
                type: 'varchar',
              },
              {
                name: 'text',
                type: 'varchar',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
            foreignKeys: [
              {
                name: 'FKUser',
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
        await queryRunner.dropTable('messages');
    }

}
