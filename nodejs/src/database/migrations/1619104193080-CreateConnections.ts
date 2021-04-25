import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateConnections1619104193080 implements MigrationInterface {
public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
            name: 'connections',
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
                    isNullable: true,
                },
                {
                    name: 'socket_id',
                    type: 'varchar',
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

    await queryRunner
        .createForeignKey(
            'connections',
            new TableForeignKey({
                name: 'FKConnectionUser',
                referencedTableName: 'users',
                referencedColumnNames: ['id'],
                columnNames: ['user_id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.dropTable('connections');
        await queryRunner.dropForeignKey('connections', 'FKConnectionUser');
    }
}