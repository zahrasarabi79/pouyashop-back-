"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const report_1 = __importDefault(require("./report"));
const passengers_1 = __importDefault(require("./passengers"));
//@table : در این جا دکورتور فانکشن که پرانتزش توی تی اس کانفیگ برداشته شده
let ContractsModel = class ContractsModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ContractsModel.prototype, "numContract", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ContractsModel.prototype, "dateContract", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ContractsModel.prototype, "typeReport", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => report_1.default),
    __metadata("design:type", Array)
], ContractsModel.prototype, "report", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => passengers_1.default),
    __metadata("design:type", Array)
], ContractsModel.prototype, "passengers", void 0);
ContractsModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
    })
], ContractsModel);
exports.default = ContractsModel;
