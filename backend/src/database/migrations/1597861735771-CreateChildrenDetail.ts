import { MigrationInterface, QueryRunner, Table, Column } from 'typeorm';

export class CreateChildrenDetail1597861735771 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'children_details',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          { name: 'year', type: 'date' },
          { name: 'biography', type: 'varchar' },
          { name: 'shoes_number', type: 'varchar' },
          { name: 'clothes_number', type: 'varchar' },
          { name: 'avatar', type: 'varchar' },
          { name: 'photo_gifts', type: 'varchar' },
          { name: 'create_at', type: 'timestamp', default: 'now()' },
          { name: 'update_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('children_details');
  }
}
