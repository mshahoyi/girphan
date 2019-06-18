"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var transactionSchema = new mongoose.Schema({
    description: { type: String, required: false },
    sum: { type: Number, required: true },
    date: { type: Date, required: true },
    type: { type: Number, required: true },
    category: { type: String, required: false },
    tags: { type: [String], required: true }
});
var Transaction = mongoose.model("Transaction", transactionSchema);
exports.default = Transaction;
