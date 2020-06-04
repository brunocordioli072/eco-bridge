import {MigrationInterface, QueryRunner} from "typeorm";

export class init1591241839342 implements MigrationInterface {
    name = 'init1591241839342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "item" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")`);
    }

}
