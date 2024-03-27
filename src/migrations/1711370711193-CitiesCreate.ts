import { MigrationInterface, QueryRunner } from "typeorm";

export class CitiesCreate1711370711193 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE econt_city (
        id INTEGER PRIMARY KEY,
        post_code VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        name_en VARCHAR(255) NOT NULL,
        region_name VARCHAR(255) NOT NULL,
        region_name_en VARCHAR(255) NOT NULL,
        phone_code VARCHAR(255) NOT NULL,
        location TEXT,
        express_city_deliveries BOOLEAN NOT NULL,
        monday BOOLEAN NOT NULL,
        tuesday BOOLEAN NOT NULL,
        wednesday BOOLEAN NOT NULL,
        thursday BOOLEAN NOT NULL,
        friday BOOLEAN NOT NULL,
        saturday BOOLEAN NOT NULL,
        sunday BOOLEAN NOT NULL,
        service_days INTEGER NOT NULL,
        zone_id INTEGER NOT NULL,
        zone_name VARCHAR(255) NOT NULL,
        zone_name_en VARCHAR(255) NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await queryRunner.query(`
      CREATE INDEX idx_econt_city_post_code ON econt_city (post_code);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Optionally, drop the indexes if you created any during the 'up' method
    await queryRunner.query(`DROP INDEX idx_econt_city_post_code`);
    await queryRunner.query(`DROP TABLE econt_city`);
  }

}
