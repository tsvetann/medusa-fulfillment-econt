import type {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/medusa"
import EcontCityService from "src/services/econtCity"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const postcode = String(req.params.postcode)

  if (!postcode) {
    return res.status(404).json({
      message: "Postcode not found!",
    })
  }
  const econtCityService = req.scope.resolve("econtCityService") as EcontCityService
  const records = await econtCityService.listByPostCode(postcode)

  res.json({
    records,
  })
}