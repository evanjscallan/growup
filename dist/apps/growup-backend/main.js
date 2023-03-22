/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/plants.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PlantsController_1;
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlantsController = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const tsoa_1 = __webpack_require__("tsoa");
const logging_helper_1 = __webpack_require__("./src/helpers/logging_helper.ts");
const ioc_1 = __webpack_require__("./src/ioc/ioc.ts");
const services_1 = __webpack_require__("./src/services/index.ts");
let PlantsController = PlantsController_1 = class PlantsController extends tsoa_1.Controller {
    constructor() {
        super();
    }
    getPlant(plantId) {
        return this.plantsService.getPlant(plantId);
    }
    getAllPlants() {
        return this.plantsService.getAllPlants();
    }
    updatePlant(plantId, plant) {
        return this.plantsService.updatePlant(plantId, plant);
    }
};
tslib_1.__decorate([
    (0, inversify_1.inject)(logging_helper_1.LoggingHelper),
    tslib_1.__metadata("design:type", typeof (_a = typeof logging_helper_1.LoggingHelper !== "undefined" && logging_helper_1.LoggingHelper) === "function" ? _a : Object)
], PlantsController.prototype, "logger", void 0);
tslib_1.__decorate([
    (0, inversify_1.inject)(services_1.PlantsService),
    tslib_1.__metadata("design:type", typeof (_b = typeof services_1.PlantsService !== "undefined" && services_1.PlantsService) === "function" ? _b : Object)
], PlantsController.prototype, "plantsService", void 0);
tslib_1.__decorate([
    (0, tsoa_1.Get)("/:plantId"),
    (0, tsoa_1.Response)(404, "Record not found."),
    (0, tsoa_1.Response)(401, "Request not authorized."),
    tslib_1.__param(0, (0, tsoa_1.Path)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], PlantsController.prototype, "getPlant", null);
tslib_1.__decorate([
    (0, tsoa_1.Get)(""),
    (0, tsoa_1.Response)(401, "Request not authorized."),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], PlantsController.prototype, "getAllPlants", null);
tslib_1.__decorate([
    (0, tsoa_1.Put)("/:plantId"),
    (0, tsoa_1.Response)(404, "Record not found."),
    (0, tsoa_1.Response)(401, "Request not authorized."),
    tslib_1.__param(0, (0, tsoa_1.Path)()),
    tslib_1.__param(1, (0, tsoa_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_e = typeof Omit !== "undefined" && Omit) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], PlantsController.prototype, "updatePlant", null);
PlantsController = PlantsController_1 = tslib_1.__decorate([
    (0, tsoa_1.Route)("/api/v1/plants"),
    (0, tsoa_1.Tags)("Plants"),
    (0, ioc_1.ProvideSingleton)(PlantsController_1),
    tslib_1.__metadata("design:paramtypes", [])
], PlantsController);
exports.PlantsController = PlantsController;


/***/ }),

/***/ "./src/errors/database_error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseError = void 0;
class DatabaseError extends Error {
}
exports.DatabaseError = DatabaseError;


/***/ }),

/***/ "./src/errors/duplicate_error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DuplicateError = void 0;
class DuplicateError extends Error {
}
exports.DuplicateError = DuplicateError;


/***/ }),

/***/ "./src/errors/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/errors/database_error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/errors/duplicate_error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/errors/not_found_error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/errors/unauthorized_error.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/errors/snowflake_import_error.ts"), exports);


/***/ }),

/***/ "./src/errors/not_found_error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotFoundError = void 0;
class NotFoundError extends Error {
}
exports.NotFoundError = NotFoundError;


/***/ }),

/***/ "./src/errors/snowflake_import_error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnowflakeImportError = void 0;
class SnowflakeImportError extends Error {
}
exports.SnowflakeImportError = SnowflakeImportError;


/***/ }),

/***/ "./src/errors/unauthorized_error.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnauthorizedError = void 0;
class UnauthorizedError extends Error {
}
exports.UnauthorizedError = UnauthorizedError;


/***/ }),

/***/ "./src/generated/routes.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterRoutes = void 0;
const tslib_1 = __webpack_require__("tslib");
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = __webpack_require__("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const plants_1 = __webpack_require__("./src/controllers/plants.ts");
const ioc_1 = __webpack_require__("./src/ioc/ioc.ts");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "IPlant": {
        "dataType": "refObject",
        "properties": {
            "_id": { "dataType": "nestedObjectLiteral", "nestedProperties": { "$oid": { "dataType": "string", "required": true } } },
            "id": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "type": { "dataType": "string", "required": true },
            "sunlight": { "dataType": "string", "required": true },
            "wateringFrequency": { "dataType": "string", "required": true },
            "wateringDescription": { "dataType": "string", "required": true },
            "imageUri": { "dataType": "string", "required": true },
            "wateringDates": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NotFoundError": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "message": { "dataType": "string", "required": true },
            "stack": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UnauthorizedError": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "message": { "dataType": "string", "required": true },
            "stack": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IPlant.Exclude_keyofIPlant._id__": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "type": { "dataType": "string", "required": true }, "sunlight": { "dataType": "string", "required": true }, "wateringFrequency": { "dataType": "string", "required": true }, "wateringDescription": { "dataType": "string", "required": true }, "imageUri": { "dataType": "string", "required": true }, "wateringDates": { "dataType": "array", "array": { "dataType": "string" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Omit_IPlant._id_": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IPlant.Exclude_keyofIPlant._id__", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/api/v1/plants/:plantId', ...((0, runtime_1.fetchMiddlewares)(plants_1.PlantsController)), ...((0, runtime_1.fetchMiddlewares)(plants_1.PlantsController.prototype.getPlant)), function PlantsController_getPlant(request, response, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const args = {
                plantId: { "in": "path", "name": "plantId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(plants_1.PlantsController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                const promise = controller.getPlant.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/v1/plants', ...((0, runtime_1.fetchMiddlewares)(plants_1.PlantsController)), ...((0, runtime_1.fetchMiddlewares)(plants_1.PlantsController.prototype.getAllPlants)), function PlantsController_getAllPlants(request, response, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(plants_1.PlantsController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                const promise = controller.getAllPlants.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/api/v1/plants/:plantId', ...((0, runtime_1.fetchMiddlewares)(plants_1.PlantsController)), ...((0, runtime_1.fetchMiddlewares)(plants_1.PlantsController.prototype.updatePlant)), function PlantsController_updatePlant(request, response, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const args = {
                plantId: { "in": "path", "name": "plantId", "required": true, "dataType": "string" },
                plant: { "in": "body", "name": "plant", "required": true, "ref": "Omit_IPlant._id_" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                const container = typeof ioc_1.iocContainer === 'function' ? ioc_1.iocContainer(request) : ioc_1.iocContainer;
                const controller = yield container.get(plants_1.PlantsController);
                if (typeof controller['setStatus'] === 'function') {
                    controller.setStatus(undefined);
                }
                const promise = controller.updatePlant.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200);
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


/***/ }),

/***/ "./src/helpers/app_helper.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var AppHelper_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppHelper = void 0;
const tslib_1 = __webpack_require__("tslib");
const express_1 = tslib_1.__importDefault(__webpack_require__("express"));
const inversify_1 = __webpack_require__("inversify");
const swagger_ui_express_1 = tslib_1.__importDefault(__webpack_require__("swagger-ui-express"));
const swaggerDocument = __webpack_require__("./src/generated/swagger.json");
const routes_1 = __webpack_require__("./src/generated/routes.ts");
const logging_helper_1 = __webpack_require__("./src/helpers/logging_helper.ts");
const ioc_1 = __webpack_require__("./src/ioc/index.ts");
const cors_1 = tslib_1.__importDefault(__webpack_require__("cors"));
const compression_1 = tslib_1.__importDefault(__webpack_require__("compression"));
const express_2 = __webpack_require__("express");
const tsoa_1 = __webpack_require__("tsoa");
const duplicate_error_1 = __webpack_require__("./src/errors/duplicate_error.ts");
const not_found_error_1 = __webpack_require__("./src/errors/not_found_error.ts");
const unauthorized_error_1 = __webpack_require__("./src/errors/unauthorized_error.ts");
const database_error_1 = __webpack_require__("./src/errors/database_error.ts");
const db_helper_1 = __webpack_require__("./src/helpers/db_helper.ts");
let AppHelper = AppHelper_1 = class AppHelper {
    getApp() {
        if (!this.app) {
            this.app = (0, express_1.default)();
            this.app.get("/api-docs/swagger.json", (_req, res) => res.json(swaggerDocument));
            const allowedOrigins = [
                "http://localhost:4201",
                "http://localhost:4202",
                undefined,
            ];
            this.app.use((0, cors_1.default)({
                origin: (origin, callback) => {
                    if (allowedOrigins.includes(origin)) {
                        callback(null, true);
                    }
                    else {
                        callback(new Error("Not allowed by CORS: " + origin));
                    }
                },
            }));
            this.app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
            // Use body parser to read sent json payloads
            this.app.use((0, express_2.urlencoded)({
                extended: true,
            }));
            this.app.use((0, express_2.json)());
            this.app.use((0, compression_1.default)());
            (0, routes_1.RegisterRoutes)(this.app);
            this.app.use(function errorHandler(err, req, res, next) {
                if (err instanceof tsoa_1.ValidateError) {
                    (0, logging_helper_1.obtainLogger)()
                        .getLogger()
                        .warn("Validation error: " + err);
                    return res.status(421).json({
                        message: "Validation Failed",
                        details: err === null || err === void 0 ? void 0 : err.fields,
                    });
                }
                if (err instanceof duplicate_error_1.DuplicateError) {
                    return res.status(422).json({
                        message: "Duplicate Record",
                    });
                }
                if (err instanceof not_found_error_1.NotFoundError) {
                    return res.status(404).json({
                        message: "Record Not Found",
                    });
                }
                if (err instanceof unauthorized_error_1.UnauthorizedError) {
                    (0, logging_helper_1.obtainLogger)()
                        .getLogger()
                        .error("Unauthorized request: " + err);
                    return res.status(401).json({
                        message: "Request Not Authorized",
                    });
                }
                if (err instanceof database_error_1.DatabaseError) {
                    (0, logging_helper_1.obtainLogger)()
                        .getLogger()
                        .error("Database Error: " + err);
                    return res.status(500).json({
                        message: "Request Not Authorized",
                    });
                }
                if (err instanceof Error) {
                    (0, logging_helper_1.obtainLogger)()
                        .getLogger()
                        .error("Internal server error: " + err);
                    return res.status(500).json({
                        message: "Internal Server Error",
                    });
                }
                next();
            });
            process.on("uncaughtException", function (error) {
                (0, logging_helper_1.obtainLogger)()
                    .getLogger()
                    .error("Unhandled exception: " + error);
                process.exit(1);
            });
            process.on("unhandledRejection", function (error) {
                (0, logging_helper_1.obtainLogger)()
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
};
tslib_1.__decorate([
    (0, inversify_1.inject)(logging_helper_1.LoggingHelper),
    tslib_1.__metadata("design:type", typeof (_a = typeof logging_helper_1.LoggingHelper !== "undefined" && logging_helper_1.LoggingHelper) === "function" ? _a : Object)
], AppHelper.prototype, "logger", void 0);
tslib_1.__decorate([
    (0, inversify_1.inject)(db_helper_1.DBHelper),
    tslib_1.__metadata("design:type", typeof (_b = typeof db_helper_1.DBHelper !== "undefined" && db_helper_1.DBHelper) === "function" ? _b : Object)
], AppHelper.prototype, "dbHelper", void 0);
AppHelper = AppHelper_1 = tslib_1.__decorate([
    (0, ioc_1.ProvideSingleton)(AppHelper_1)
], AppHelper);
exports.AppHelper = AppHelper;


/***/ }),

/***/ "./src/helpers/db_helper.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var DBHelper_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DBHelper = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const mongodb_1 = __webpack_require__("mongodb");
const ioc_1 = __webpack_require__("./src/ioc/index.ts");
const logging_helper_1 = __webpack_require__("./src/helpers/logging_helper.ts");
let DBHelper = DBHelper_1 = class DBHelper {
    getDb() {
        if (!this.db) {
            try {
                this.loggingHelper.getLogger().info("Connection to database");
                const client = new mongodb_1.MongoClient(process.env.DB_CONNECTION_STRING);
                this.db = client.db("growupDB");
                this.loggingHelper.getLogger().info("Connection successful");
            }
            catch (error) {
                this.loggingHelper
                    .getLogger()
                    .error("Error connection to database: ", error);
            }
        }
        return this.db;
    }
};
tslib_1.__decorate([
    (0, inversify_1.inject)(logging_helper_1.LoggingHelper),
    tslib_1.__metadata("design:type", typeof (_a = typeof logging_helper_1.LoggingHelper !== "undefined" && logging_helper_1.LoggingHelper) === "function" ? _a : Object)
], DBHelper.prototype, "loggingHelper", void 0);
DBHelper = DBHelper_1 = tslib_1.__decorate([
    (0, ioc_1.ProvideSingleton)(DBHelper_1)
], DBHelper);
exports.DBHelper = DBHelper;


/***/ }),

/***/ "./src/helpers/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/helpers/app_helper.ts"), exports);
tslib_1.__exportStar(__webpack_require__("./src/helpers/logging_helper.ts"), exports);


/***/ }),

/***/ "./src/helpers/logging_helper.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var LoggingHelper_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingHelper = exports.obtainLogger = void 0;
const tslib_1 = __webpack_require__("tslib");
const winston = tslib_1.__importStar(__webpack_require__("winston"));
const ioc_1 = __webpack_require__("./src/ioc/ioc.ts");
function obtainLogger() {
    return ioc_1.iocContainer.get(LoggingHelper);
}
exports.obtainLogger = obtainLogger;
let LoggingHelper = LoggingHelper_1 = class LoggingHelper {
    getLogger() {
        if (!this.logger) {
            this.logger = this.createLogger();
        }
        return this.logger;
    }
    createLogger() {
        const logger = winston.createLogger({
            level: process.env.LOG_LEVEL || 'info',
            format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
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
        if (true) {
            logger.add(new winston.transports.File({
                filename: 'logs/application.log',
            }));
        }
        return logger;
    }
};
LoggingHelper = LoggingHelper_1 = tslib_1.__decorate([
    (0, ioc_1.ProvideSingleton)(LoggingHelper_1)
], LoggingHelper);
exports.LoggingHelper = LoggingHelper;


/***/ }),

/***/ "./src/ioc/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/ioc/ioc.ts"), exports);


/***/ }),

/***/ "./src/ioc/ioc.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvideSingleton = exports.ProvideNamed = exports.provide = exports.iocContainer = void 0;
const inversify_1 = __webpack_require__("inversify");
const inversify_binding_decorators_1 = __webpack_require__("inversify-binding-decorators");
__webpack_require__("reflect-metadata");
const tsoa_1 = __webpack_require__("tsoa");
(0, inversify_1.decorate)((0, inversify_1.injectable)(), tsoa_1.Controller);
exports.iocContainer = new inversify_1.Container();
exports.provide = (0, inversify_binding_decorators_1.makeProvideDecorator)(exports.iocContainer);
const fluentProvider = (0, inversify_binding_decorators_1.makeFluentProvideDecorator)(exports.iocContainer);
const ProvideNamed = (identifier, name) => fluentProvider(identifier).whenTargetNamed(name).done();
exports.ProvideNamed = ProvideNamed;
const ProvideSingleton = (identifier) => fluentProvider(identifier).inSingletonScope().done();
exports.ProvideSingleton = ProvideSingleton;


/***/ }),

/***/ "./src/repositories/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/repositories/plants.ts"), exports);


/***/ }),

/***/ "./src/repositories/plants.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PlantsRepository_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlantsRepository = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const logging_helper_1 = __webpack_require__("./src/helpers/logging_helper.ts");
const ioc_1 = __webpack_require__("./src/ioc/ioc.ts");
const db_helper_1 = __webpack_require__("./src/helpers/db_helper.ts");
let PlantsRepository = PlantsRepository_1 = class PlantsRepository {
    getCollection() {
        return this.dbHelper.getDb().collection("plants");
    }
    findById(rowId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.getCollection().findOne({ id: rowId });
        });
    }
    getAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.getCollection().find().toArray();
        });
    }
    count() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.getCollection().countDocuments();
        });
    }
    clear() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.getCollection().deleteOne();
        });
    }
    update(plantId, plant) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.getCollection().findOneAndUpdate({ id: plantId }, { $set: plant }, { upsert: true, returnDocument: "after" })).value;
        });
    }
};
tslib_1.__decorate([
    (0, inversify_1.inject)(logging_helper_1.LoggingHelper),
    tslib_1.__metadata("design:type", typeof (_a = typeof logging_helper_1.LoggingHelper !== "undefined" && logging_helper_1.LoggingHelper) === "function" ? _a : Object)
], PlantsRepository.prototype, "loggingHelper", void 0);
tslib_1.__decorate([
    (0, inversify_1.inject)(db_helper_1.DBHelper),
    tslib_1.__metadata("design:type", typeof (_b = typeof db_helper_1.DBHelper !== "undefined" && db_helper_1.DBHelper) === "function" ? _b : Object)
], PlantsRepository.prototype, "dbHelper", void 0);
PlantsRepository = PlantsRepository_1 = tslib_1.__decorate([
    (0, ioc_1.ProvideSingleton)(PlantsRepository_1)
], PlantsRepository);
exports.PlantsRepository = PlantsRepository;


/***/ }),

/***/ "./src/services/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("./src/services/plants.ts"), exports);


/***/ }),

/***/ "./src/services/plants.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var PlantsService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlantsService = void 0;
const tslib_1 = __webpack_require__("tslib");
const inversify_1 = __webpack_require__("inversify");
const errors_1 = __webpack_require__("./src/errors/index.ts");
const ioc_1 = __webpack_require__("./src/ioc/ioc.ts");
const repositories_1 = __webpack_require__("./src/repositories/index.ts");
const logging_helper_1 = __webpack_require__("./src/helpers/logging_helper.ts");
let PlantsService = PlantsService_1 = class PlantsService {
    getPlant(plantId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const plant = yield this.plantsRepository.findById(plantId);
            if (!plant) {
                return Promise.reject(new errors_1.NotFoundError("Plant not found"));
            }
            return plant;
        });
    }
    getAllPlants() {
        return this.plantsRepository.getAll();
    }
    updatePlant(plantId, plant) {
        return this.plantsRepository.update(plantId, plant);
    }
};
tslib_1.__decorate([
    (0, inversify_1.inject)(repositories_1.PlantsRepository),
    tslib_1.__metadata("design:type", typeof (_a = typeof repositories_1.PlantsRepository !== "undefined" && repositories_1.PlantsRepository) === "function" ? _a : Object)
], PlantsService.prototype, "plantsRepository", void 0);
tslib_1.__decorate([
    (0, inversify_1.inject)(logging_helper_1.LoggingHelper),
    tslib_1.__metadata("design:type", typeof (_b = typeof logging_helper_1.LoggingHelper !== "undefined" && logging_helper_1.LoggingHelper) === "function" ? _b : Object)
], PlantsService.prototype, "loggingHelper", void 0);
PlantsService = PlantsService_1 = tslib_1.__decorate([
    (0, ioc_1.ProvideSingleton)(PlantsService_1)
], PlantsService);
exports.PlantsService = PlantsService;


/***/ }),

/***/ "@tsoa/runtime":
/***/ ((module) => {

module.exports = require("@tsoa/runtime");

/***/ }),

/***/ "compression":
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "inversify":
/***/ ((module) => {

module.exports = require("inversify");

/***/ }),

/***/ "inversify-binding-decorators":
/***/ ((module) => {

module.exports = require("inversify-binding-decorators");

/***/ }),

/***/ "mongodb":
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "reflect-metadata":
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "swagger-ui-express":
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "tsoa":
/***/ ((module) => {

module.exports = require("tsoa");

/***/ }),

/***/ "winston":
/***/ ((module) => {

module.exports = require("winston");

/***/ }),

/***/ "./src/generated/swagger.json":
/***/ ((module) => {

module.exports = JSON.parse('{"components":{"examples":{},"headers":{},"parameters":{},"requestBodies":{},"responses":{},"schemas":{"IPlant":{"properties":{"_id":{"properties":{"$oid":{"type":"string"}},"required":["$oid"],"type":"object"},"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"type":{"type":"string"},"sunlight":{"type":"string"},"wateringFrequency":{"type":"string"},"wateringDescription":{"type":"string"},"imageUri":{"type":"string"},"wateringDates":{"items":{"type":"string"},"type":"array"}},"required":["id","name","description","type","sunlight","wateringFrequency","wateringDescription","imageUri","wateringDates"],"type":"object","additionalProperties":false},"NotFoundError":{"properties":{"name":{"type":"string"},"message":{"type":"string"},"stack":{"type":"string"}},"required":["name","message"],"type":"object","additionalProperties":false},"UnauthorizedError":{"properties":{"name":{"type":"string"},"message":{"type":"string"},"stack":{"type":"string"}},"required":["name","message"],"type":"object","additionalProperties":false},"Pick_IPlant.Exclude_keyofIPlant._id__":{"properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"type":"string"},"type":{"type":"string"},"sunlight":{"type":"string"},"wateringFrequency":{"type":"string"},"wateringDescription":{"type":"string"},"imageUri":{"type":"string"},"wateringDates":{"items":{"type":"string"},"type":"array"}},"required":["id","name","description","type","sunlight","wateringFrequency","wateringDescription","imageUri","wateringDates"],"type":"object","description":"From T, pick a set of properties whose keys are in the union K"},"Omit_IPlant._id_":{"$ref":"#/components/schemas/Pick_IPlant.Exclude_keyofIPlant._id__","description":"Construct a type with the properties of T except for those in type K."}},"securitySchemes":{}},"info":{"title":"TSOA","version":"1.0.0","description":"Build swagger-compliant REST APIs using TypeScript and Node","license":{"name":"MIT"},"contact":{"name":"unknown"}},"openapi":"3.0.0","paths":{"/api/v1/plants/{plantId}":{"get":{"operationId":"GetPlant","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"$ref":"#/components/schemas/IPlant"}}}},"401":{"description":"Request not authorized.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UnauthorizedError"}}}},"404":{"description":"Record not found.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}},"tags":["Plants"],"security":[],"parameters":[{"in":"path","name":"plantId","required":true,"schema":{"type":"string"}}]},"put":{"operationId":"UpdatePlant","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"$ref":"#/components/schemas/IPlant"}}}},"401":{"description":"Request not authorized.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UnauthorizedError"}}}},"404":{"description":"Record not found.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/NotFoundError"}}}}},"tags":["Plants"],"security":[],"parameters":[{"in":"path","name":"plantId","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/Omit_IPlant._id_"}}}}}},"/api/v1/plants":{"get":{"operationId":"GetAllPlants","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/IPlant"},"type":"array"}}}},"401":{"description":"Request not authorized.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/UnauthorizedError"}}}}},"tags":["Plants"],"security":[],"parameters":[]}}},"servers":[{"url":"/"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const dotenv = tslib_1.__importStar(__webpack_require__("dotenv"));
const ioc_1 = __webpack_require__("./src/ioc/ioc.ts");
const helpers_1 = __webpack_require__("./src/helpers/index.ts");
dotenv.config();
const appHelper = ioc_1.iocContainer.get(helpers_1.AppHelper);
appHelper.getApp();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map