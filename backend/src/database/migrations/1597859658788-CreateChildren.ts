import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateChildren1597859658788 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'childrens',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          { name: 'name', type: 'varchar' },
          { name: 'birthday', type: 'date' },
          { name: 'sex', type: 'varchar' },
          { name: 'likes', type: 'varchar' },
          { name: 'create_at', type: 'timestamp', default: 'now()' },
          { name: 'update_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('childrens');
  }
}
