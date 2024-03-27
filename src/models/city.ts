import { BeforeInsert, Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity({ name: "econt_city" })
export class EcontCity {
  @PrimaryColumn({ type: "int" }) // Use PrimaryColumn instead of PrimaryGeneratedColumn
  id: number;

  @Index({ unique: false }) // Adding an index to improve search performance on postCode
  @Column({ type: "varchar", length: 255 })
  post_code: string;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 255 })
  name_en: string;

  @Column({ type: "varchar", length: 255 })
  region_name: string;

  @Column({ type: "varchar", length: 255 })
  region_name_en: string;

  @Column({ type: "varchar", length: 255 })
  phone_code: string;

  @Column({ type: "text", nullable: true })
  location: string | null;

  @Column({ type: "boolean" })
  express_city_deliveries: boolean;

  @Column({ type: "boolean" })
  monday: boolean;

  @Column({ type: "boolean" })
  tuesday: boolean;

  @Column({ type: "boolean" })
  wednesday: boolean;

  @Column({ type: "boolean" })
  thursday: boolean;

  @Column({ type: "boolean" })
  friday: boolean;

  @Column({ type: "boolean" })
  saturday: boolean;

  @Column({ type: "boolean" })
  sunday: boolean;

  @Column({ type: "int" })
  service_days: number;

  @Column({ type: "int" })
  zone_id: number;

  @Column({ type: "varchar", length: 255 })
  zone_name: string;

  @Column({ type: "varchar", length: 255 })
  zone_name_en: string;

  @Column({ type: "timestamptz" })
  created_at: Date = new Date();

  @Column({ type: "timestamptz" })
  updated_at: Date = new Date();

  @BeforeInsert()
  private beforeInsert(): void {
    this.updated_at = new Date();
  }
}