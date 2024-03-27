import { MigrationInterface, QueryRunner } from "typeorm";

export class OfficeCreate1711547056563 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE econt_office (
        id INT NOT NULL,
        code VARCHAR(255) NOT NULL,
        is_mps BOOLEAN NOT NULL,
        is_aps BOOLEAN NOT NULL,
        name VARCHAR(255) NOT NULL,
        name_en VARCHAR(255) NOT NULL,
        phones TEXT[],
        emails TEXT[],
        info TEXT NOT NULL,
        currency VARCHAR(255) NOT NULL,
        language VARCHAR(255),
        normal_business_hours_from BIGINT,
        normal_business_hours_to BIGINT,
        half_day_business_hours_from BIGINT,
        half_day_business_hours_to BIGINT,
        sunday_business_hours_from BIGINT,
        sunday_business_hours_to BIGINT,
        shipment_types TEXT[],
        partner_code VARCHAR(255),
        hub_code VARCHAR(255) NOT NULL,
        hub_name VARCHAR(255) NOT NULL,
        hub_name_en VARCHAR(255) NOT NULL,
        is_drive BOOLEAN NOT NULL,
        city_fk INT NOT NULL,
        city_name VARCHAR(255) NOT NULL,
        city_name_en VARCHAR(255) NOT NULL,
        post_code VARCHAR(255) NOT NULL,
        full_address TEXT NOT NULL,
        full_address_en TEXT NOT NULL,
        quarter VARCHAR(255),
        street VARCHAR(255),
        num VARCHAR(255),
        other TEXT,
        zip VARCHAR(255),
        hezid INT,
        latitude NUMERIC(10, 8),
        longitude NUMERIC(11, 8),
        confidence INT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        PRIMARY KEY (id)
      );
    `);

    await queryRunner.query(`
      CREATE INDEX idx_econt_office_city_name ON econt_office (city_name);
    `);
    await queryRunner.query(`
      CREATE INDEX idx_econt_office_name ON econt_office (name);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop indexes first
    await queryRunner.query('DROP INDEX IF EXISTS idx_econt_office_city_name');
    await queryRunner.query('DROP INDEX IF EXISTS idx_econt_office_name');

    // Then drop the table
    await queryRunner.query('DROP TABLE IF EXISTS econt_office');
  }

}
