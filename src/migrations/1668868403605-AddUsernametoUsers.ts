import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsernametoUsers1668868403605 implements MigrationInterface {
    name = 'AddUsernametoUsers1668868403605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }

}
