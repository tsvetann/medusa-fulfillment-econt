export interface ICity {
  id: number;
  postCode: string;
  name: string;
  nameEn: string;
  regionName: string;
  regionNameEn: string;
  phoneCode: string;
  location: string | null;
  expressCityDeliveries: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  serviceDays: number;
  zoneId: number;
  zoneName: string;
  zoneNameEn: string;
}

export interface ICityMapped {
  id: number;
  post_code: string;
  name: string;
  name_en: string;
  region_name: string;
  region_name_en: string;
  phone_code: string;
  location: string | null;
  express_city_deliveries: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  service_days: number;
  zone_id: number;
  zone_name: string;
  zone_name_en: string;
}

export interface IEcontOffice {
  id: number;
  code: string;
  is_mps: boolean;
  is_aps: boolean;
  name: string;
  name_en: string;
  phones: string[];
  emails: string[];
  info: string;
  currency: string;
  language: null | string;
  normal_business_hours_from: null | number;
  normal_business_hours_to: null | number;
  half_day_business_hours_from: null | number;
  half_day_business_hours_to: null | number;
  sunday_business_hours_from: null | number;
  sunday_business_hours_to: null | number;
  shipment_types: string[];
  partner_code: string;
  hub_code: string;
  hub_name: string;
  hub_name_en: string;
  is_drive: boolean;
  city_fk: number;
  city_name: string;
  city_name_en: string;
  post_code: string;
  full_address: string;
  full_address_en: string;
  quarter: null | string;
  street: null | string;
  num: null | string;
  other: string;
  zip: null | string;
  hezid: null | number;
  latitude: null | number;
  longitude: null | number;
  confidence: number;
}

export interface IncomingOfficeData {
  id: number;
  code: string;
  isMPS: boolean;
  isAPS: boolean;
  name: string;
  nameEn: string;
  phones: string[];
  emails: string[];
  address: {
    id: null;
    city: {
      id: number;
      country: {
        id: number;
        code2: string;
        code3: string;
        name: string;
        nameEn: string;
        isEU: boolean;
      };
      postCode: string;
      name: string;
      nameEn: string;
      regionName: null;
      regionNameEn: null;
    };
    fullAddress: string;
    fullAddressEn: string;
    quarter: null | string;
    street: string;
    num: string;
    other: string;
    location: {
      latitude: number;
      longitude: number;
      confidence: number;
    };
    zip: null | string;
    hezid: null | number;
  };
  info: string;
  currency: string;
  language: null | string;
  normalBusinessHoursFrom: number;
  normalBusinessHoursTo: number;
  halfDayBusinessHoursFrom: number;
  halfDayBusinessHoursTo: number;
  sundayBusinessHoursFrom: null | number;
  sundayBusinessHoursTo: null | number;
  shipmentTypes: string[];
  partnerCode: string;
  hubCode: string;
  hubName: string;
  hubNameEn: string;
  isDrive: boolean;
}