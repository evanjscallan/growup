import { inject } from "inversify";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { ProvideSingleton } from "../ioc";
import { LoggingHelper } from "./logging_helper";

@ProvideSingleton(DBHelper)
export class DBHelper {
  @inject(LoggingHelper) private loggingHelper: LoggingHelper;

  private db: mongoose.mongo.Db;

  public getDb(): mongoose.mongo.Db {
    if (!this.db) {
      try {
        this.loggingHelper.getLogger().info("Connection to database");
        const client = new MongoClient(process.env.DB_CONNECTION_STRING);
        this.db = client.db("growupDB");
        this.loggingHelper.getLogger().info("Connection successful");
      } catch (error) {
        this.loggingHelper
          .getLogger()
          .error("Error connection to database: ", error);
      }
    }

    return this.db;
  }
}
