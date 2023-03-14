import express from "express";
import { inject } from "inversify";
import swaggerUi from "swagger-ui-express";
import swaggerDocument = require("../generated/swagger.json");
import { RegisterRoutes } from "../generated/routes";
import { LoggingHelper, obtainLogger } from "./logging_helper";
import { ProvideSingleton } from "../ioc";
import cors from "cors";
import compression from "compression";
import {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
  json,
  urlencoded,
} from "express";
import { ValidateError } from "tsoa";
import { DuplicateError } from "../errors/duplicate_error";
import { NotFoundError } from "../errors/not_found_error";
import { UnauthorizedError } from "../errors/unauthorized_error";
import { DatabaseError } from "../errors/database_error";
import { DBHelper } from "./db_helper";

@ProvideSingleton(AppHelper)
export class AppHelper {
  @inject(LoggingHelper) private logger: LoggingHelper;
  @inject(DBHelper) private dbHelper: DBHelper;

  private app;
  private server;

  public getApp(): express.Express {
    if (!this.app) {
      this.app = express();

      this.app.get("/api-docs/swagger.json", (_req, res) =>
        res.json(swaggerDocument)
      );

      const allowedOrigins = [
        "http://localhost:4201",
        "http://localhost:4202",
        undefined,
      ];

      this.app.use(
        cors({
          origin: (origin, callback) => {
            if (allowedOrigins.includes(origin)) {
              callback(null, true);
            } else {
              callback(new Error("Not allowed by CORS: " + origin));
            }
          },
        })
      );

      this.app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
      );

      // Use body parser to read sent json payloads
      this.app.use(
        urlencoded({
          extended: true,
        })
      );

      this.app.use(json());

      this.app.use(compression());

      RegisterRoutes(this.app);

      this.app.use(function errorHandler(
        err: unknown,
        req: ExRequest,
        res: ExResponse,
        next: NextFunction
      ): ExResponse | void {
        if (err instanceof ValidateError) {
          obtainLogger()
            .getLogger()
            .warn("Validation error: " + err);
          return res.status(421).json({
            message: "Validation Failed",
            details: err?.fields,
          });
        }
        if (err instanceof DuplicateError) {
          return res.status(422).json({
            message: "Duplicate Record",
          });
        }
        if (err instanceof NotFoundError) {
          return res.status(404).json({
            message: "Record Not Found",
          });
        }
        if (err instanceof UnauthorizedError) {
          obtainLogger()
            .getLogger()
            .error("Unauthorized request: " + err);
          return res.status(401).json({
            message: "Request Not Authorized",
          });
        }
        if (err instanceof DatabaseError) {
          obtainLogger()
            .getLogger()
            .error("Database Error: " + err);
          return res.status(500).json({
            message: "Request Not Authorized",
          });
        }
        if (err instanceof Error) {
          obtainLogger()
            .getLogger()
            .error("Internal server error: " + err);
          return res.status(500).json({
            message: "Internal Server Error",
          });
        }

        next();
      });

      process.on("uncaughtException", function (error) {
        obtainLogger()
          .getLogger()
          .error("Unhandled exception: " + error);
        process.exit(1);
      });

      process.on("unhandledRejection", function (error) {
        obtainLogger()
          .getLogger()
          .error("Unhandled promise rejection: " + error);
      });

      const port = process.env.PORT || 4201;
      this.server = this.app.listen(port, () => {
        this.logger
          .getLogger()
          .info(`Listening at http://localhost:${port}/api`);
        this.dbHelper.getDb();
      });
      this.server.on("error", (error) => {
        this.logger.getLogger().error(error);
      });
    }

    return this.app;
  }
}
