import { inject } from "inversify";
import mongoose from "mongoose";
import { LoggingHelper } from "../helpers/logging_helper";
import { ProvideSingleton } from "../ioc/ioc";
import { IPlant } from "@grow-up/types";
import { DBHelper } from "../helpers/db_helper";

@ProvideSingleton(PlantsRepository)
export class PlantsRepository {
  @inject(LoggingHelper) private loggingHelper: LoggingHelper;
  @inject(DBHelper) private dbHelper: DBHelper;

  public getCollection() {
    return this.dbHelper.getDb().collection<IPlant>("plants");
  }

  public async findById(rowId: string): Promise<IPlant> {
    return this.getCollection().findOne({ id: rowId });
  }

  public async getAll(): Promise<Array<IPlant>> {
    return await this.getCollection().find().toArray();
  }

  public async count(): Promise<number> {
    return this.getCollection().countDocuments();
  }

  public async clear(): Promise<mongoose.mongo.DeleteResult> {
    return this.getCollection().deleteOne();
  }
}
