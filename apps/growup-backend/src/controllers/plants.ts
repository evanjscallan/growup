import { IPlant } from "@grow-up/types";
import { inject } from "inversify";
import { Controller, Get, Route, Tags, Response, Path, Body, Put } from "tsoa";
import { NotFoundError, UnauthorizedError } from "../errors";
import { LoggingHelper } from "../helpers/logging_helper";
import { ProvideSingleton } from "../ioc/ioc";
import { PlantsService } from "../services";

@Route("/api/v1/plants")
@Tags("Plants")
@ProvideSingleton(PlantsController)
export class PlantsController extends Controller {
  @inject(LoggingHelper) private logger: LoggingHelper;
  @inject(PlantsService) private plantsService: PlantsService;

  constructor() {
    super();
  }

  @Get("/:plantId")
  @Response<NotFoundError>(404, "Record not found.")
  @Response<UnauthorizedError>(401, "Request not authorized.")
  getPlant(@Path() plantId: string): Promise<IPlant> {
    return this.plantsService.getPlant(plantId);
  }

  @Get("")
  @Response<UnauthorizedError>(401, "Request not authorized.")
  getAllPlants(): Promise<Array<IPlant>> {
    return this.plantsService.getAllPlants();
  }

  @Put("/:plantId")
  @Response<NotFoundError>(404, "Record not found.")
  @Response<UnauthorizedError>(401, "Request not authorized.")
  updatePlant(
    @Path() plantId: string,
    @Body() plant: Omit<IPlant, "_id">
  ): Promise<IPlant> {
    return this.plantsService.updatePlant(plantId, plant);
  }
}
