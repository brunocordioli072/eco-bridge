import {MigrationInterface, QueryRunner} from "typeorm";

export class init1591238255253 implements MigrationInterface {
    name = 'init1591238255253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item" ("id" character varying NOT NULL, "name" character varying(300) NOT NULL, "lastName" character varying(300) NOT NULL, "description" character varying(300) NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "item"`);
    }

}
