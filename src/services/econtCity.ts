import { EcontCityRepository } from "../repositories/city";
import { ICity, ICityMapped } from "../types";
import { TransactionBaseService } from "@medusajs/medusa";
import cityMapper from "../utils/city-mapper";
import { Like } from "typeorm";

class EcontCityService extends TransactionBaseService {
  protected cityRepository_: typeof EcontCityRepository

  constructor(container) {
    super(container)
    this.cityRepository_ = container.cityRepository
  }

  async updateAllCities(payload: ICity[]): Promise<void> {
    const cityRepo = this.activeManager_.withRepository(
      this.cityRepository_
    )

    await cityRepo.save(payload.map(cityMapper), { chunk: 50 });
  }

  async listByPostCode(postcode: string): Promise<ICityMapped[]> {
    const cityRepo = this.activeManager_.withRepository(
      this.cityRepository_
    )

    return cityRepo.find({ where: { post_code: Like(`${postcode}%`) } })
  }
}

export default EcontCityService