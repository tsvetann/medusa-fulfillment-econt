import type {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/medusa"
import EcontOfficeService from "src/services/econtOffice"
import EcontCityService from "src/services/econtCity"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const name = String(req.params.name)

  if (!name) {
    return res.status(404).json({
      message: "Град не е намерен",
    })
  }

  try {
    const econtOfficeService = req.scope.resolve("econtOfficeService") as EcontOfficeService
    const records = await econtOfficeService.searchByCityName(name)

    if (records.length === 1) {
      const office = records[0]

      const econtCityService = req.scope.resolve("econtCityService") as EcontCityService
      const city = await econtCityService.findCityById(office.city_fk)

      return res.json({
        records: [
          {
            ...office,
            region_name: city.region_name,
          },
        ],
        message: ""
      })
    }

    res.json({
      records,
      message: ""
    })
  } catch (error) {
    res.status(400).json({
      message: error.message,
      records: [],
    })
  }

}