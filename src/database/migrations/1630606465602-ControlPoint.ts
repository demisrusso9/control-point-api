import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ControlPoint1630518734373 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'control_point',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'currentDate',
            length: '30',
            type: 'varchar'
          },
          {
            name: 'morningEntry',
            length: '5',
            type: 'varchar'
          },
          {
            name: 'morningExit',
            length: '5',
            type: 'varchar'
          },
          {
            name: 'afternoonEntry',
            length: '5',
            type: 'varchar'
          },
          {
            name: 'afternoonExit',
            length: '5',
            type: 'varchar'
          },
          {
            name: 'morningActivities',
            type: 'varchar'
          },
          {
            name: 'afternoonActivities',
            type: 'varchar'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
