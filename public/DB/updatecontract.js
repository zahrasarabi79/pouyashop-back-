"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contracts_1 = __importDefault(require("./schema/contracts"));
const passengers_1 = __importDefault(require("./schema/passengers"));
const report_1 = __importDefault(require("./schema/report"));
const updateData = ({ id, numContract, dateContract, typeReport, report, passengers, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield contracts_1.default.update({
        numContract,
        dateContract,
        typeReport,
    }, {
        where: { id: id },
    });
    yield report_1.default.destroy({
        where: { contractId: id },
    });
    yield passengers_1.default.destroy({
        where: { contractId: id },
    });
    let reportsModelData = report.map(({ bank, costTitle, datepayment, number, payments, presenter }) => {
        return {
            costTitle,
            datepayment,
            number,
            payments,
            presenter,
            bank,
            contractId: id,
        };
    });
    yield report_1.default.bulkCreate(reportsModelData);
    let passengersModelData = passengers.map((passenger) => {
        return { passenger, contractId: id };
    });
    yield passengers_1.default.bulkCreate(passengersModelData);
});
exports.default = { updateData };
