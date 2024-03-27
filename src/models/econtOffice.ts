import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('econt_office')
export class EcontOffice {
    @PrimaryColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    is_mps: boolean;

    @Column()
    is_aps: boolean;

    @Column()
    name: string;

    @Column()
    name_en: string;

    @Column("text", { array: true })
    phones: string[];

    @Column("text", { array: true })
    emails: string[];

    @Column("text")
    info: string;

    @Column()
    currency: string;

    @Column({ nullable: true })
    language: string | null;

    @Column('bigint', { nullable: true })
    normal_business_hours_from: number | null;

    @Column('bigint', { nullable: true })
    normal_business_hours_to: number | null;

    @Column('bigint', { nullable: true })
    half_day_business_hours_from: number | null;

    @Column('bigint', { nullable: true })
    half_day_business_hours_to: number | null;

    @Column('bigint', { nullable: true })
    sunday_business_hours_from: number | null;

    @Column('bigint', { nullable: true })
    sunday_business_hours_to: number | null;

    @Column("text", { array: true })
    shipment_types: string[];

    @Column()
    partner_code: string;

    @Column()
    hub_code: string;

    @Column()
    hub_name: string;

    @Column()
    hub_name_en: string;

    @Column()
    is_drive: boolean;

    // Address related fields
    @Column()
    city_fk: number;

    @Column()
    city_name: string;

    @Column()
    city_name_en: string;

    @Column()
    post_code: string;

    @Column("text")
    full_address: string;

    @Column("text")
    full_address_en: string;

    @Column({ nullable: true })
    quarter: string | null;

    @Column({ nullable: true })
    street: string | null;

    @Column({ nullable: true })
    num: string | null;

    @Column("text", { nullable: true })
    other: string | null;

    @Column({ nullable: true })
    zip: string | null;

    @Column({ nullable: true })
    hezid: number | null;

    // Location related fields
    @Column({ type: 'numeric', precision: 10, scale: 8, nullable: true })
    latitude: number | null;

    @Column({ type: 'numeric', precision: 11, scale: 8, nullable: true })
    longitude: number | null;

    @Column()
    confidence: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
