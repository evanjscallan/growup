/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as dotenv from "dotenv";
import { iocContainer } from "./ioc/ioc";
import { AppHelper } from "./helpers";

dotenv.config();

const appHelper = iocContainer.get<AppHelper>(AppHelper);

appHelper.getApp();
