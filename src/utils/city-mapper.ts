import { ICity, ICityMapped } from "src/types";

export default function cityMapper(fromObj: ICity): ICityMapped {
  return {
    id: fromObj.id,
    post_code: fromObj.postCode,
    name: fromObj.name,
    name_en: fromObj.nameEn,
    region_name: fromObj.regionName,
    region_name_en: fromObj.regionNameEn,
    phone_code: fromObj.phoneCode,
    location: fromObj.location, // Assuming direct mapping if null or any other value
    express_city_deliveries: fromObj.expressCityDeliveries,
    monday: fromObj.monday,
    tuesday: fromObj.tuesday,
    wednesday: fromObj.wednesday,
    thursday: fromObj.thursday,
    friday: fromObj.friday,
    saturday: fromObj.saturday,
    sunday: fromObj.sunday,
    service_days: fromObj.serviceDays,
    zone_id: fromObj.zoneId,
    zone_name: fromObj.zoneName,
    zone_name_en: fromObj.zoneNameEn
  };
}