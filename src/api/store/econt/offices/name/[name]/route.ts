import type {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/medusa"
import EcontOfficeService from "src/services/econtOffice"

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
  const econtOfficeService = req.scope.resolve("econtOfficeService") as EcontOfficeService
  const records = await econtOfficeService.searchByCityName(name)

  res.json({
    records,
  })
}