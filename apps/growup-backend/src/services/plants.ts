import { inject } from "inversify";
import { NotFoundError } from "../errors";
import { ProvideSingleton } from "../ioc/ioc";
import { PlantsRepository } from "./../repositories";
import { LoggingHelper } from "../helpers/logging_helper";

import type { IPlant } from "@grow-up/types";

export interface IPlantsService {
  getPlant(plantId: string): Promise<IPlant>;
  getAllPlants(): Promise<Array<IPlant>>;
}

@ProvideSingleton(PlantsService)
export class PlantsService implements IPlantsService {
  @inject(PlantsRepository)
  private plantsRepository: PlantsRepository;
  @inject(LoggingHelper)
  private loggingHelper: LoggingHelper;

  async getPlant(plantId: string): Promise<IPlant> {
    const plant = await this.plantsRepository.findById(plantId);

    if (!plant) {
      return Promise.reject(new NotFoundError("Plant not found"));
    }

    return plant;
  }

  getAllPlants(): Promise<Array<IPlant>> {
    return this.plantsRepository.getAll();
  }
}
