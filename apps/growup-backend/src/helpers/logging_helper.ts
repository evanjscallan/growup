import * as winston from 'winston';
import { iocContainer, ProvideSingleton } from '../ioc/ioc';

export function obtainLogger(): LoggingHelper {
  return iocContainer.get(LoggingHelper);
}

@ProvideSingleton(LoggingHelper)
export class LoggingHelper {
  private logger;

  public getLogger(): winston.Logger {
    if (!this.logger) {
      this.logger = this.createLogger();
    }

    return this.logger;
  }

  private createLogger() {
    const logger = winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      defaultMeta: { service: 'user-service' },
      transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.Console({}),
      ],
    });

    //
    // If we're not in production then log to the `console` with the format:
    // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
    //
    if (process.env.NODE_ENV !== 'local') {
      logger.add(
        new winston.transports.File({
          filename: 'logs/application.log',
        })
      );
    }

    return logger;
  }
}
