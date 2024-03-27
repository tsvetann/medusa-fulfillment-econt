import { EcontCity } from "../models/city"
import {
  dataSource,
} from "@medusajs/medusa/dist/loaders/database"

export const EcontCityRepository = dataSource
  .getRepository(EcontCity)
  .extend({
    customMethod(): void {
      // TODO add custom implementation  
      return
    },
  })

export default EcontCityRepository  