import EcontOfficeRepository from "../repositories/econtOffice";
import { IEcontOffice, IncomingOfficeData } from "src/types";
import { TransactionBaseService } from "@medusajs/medusa";
import mapOfficeData from "../utils/office-mapper";
import { Like } from "typeorm";

class EcontOfficeService extends TransactionBaseService {
  protected officeRepository_: typeof EcontOfficeRepository

  constructor(container) {
    super(container)
    this.officeRepository_ = container.econtOfficeRepository
  }

  async updateAllOffices(payload: IncomingOfficeData[]): Promise<void> {
    const officeRepo = this.activeManager_.withRepository(
      this.officeRepository_
    )
    
    await officeRepo.save(payload.map(mapOfficeData), { chunk: 50 });
  }

  async searchByCityName(name: string): Promise<IEcontOffice[]> {
    const officeRepo = this.activeManager_.withRepository(
      this.officeRepository_
    )

    return officeRepo.find({ where: { city_name: Like(`%${name.toLowerCase()}%`) } })
  }

  async searchByOfficeName(name: string): Promise<IEcontOffice[]> {
    const officeRepo = this.activeManager_.withRepository(
      this.officeRepository_
    )

    return officeRepo.find({ where: { name: Like(`%${name.toLowerCase()}%`) } })
  }
}

export default EcontOfficeService