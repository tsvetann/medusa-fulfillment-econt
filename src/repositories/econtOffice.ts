import { EcontOffice } from "../models/econtOffice"
import {
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

export const EcontOfficeRepository = dataSource
  .getRepository(EcontOffice)
  .extend({
    customMethod(): void {
      // TODO add custom implementation  
      return
    },
  })

export default EcontOfficeRepository  