"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var purchase_1 = __importDefault(require("../db/purchase"));
router.post("/", function (req, res) {
    var purchase = req.body;
    new purchase_1.default(purchase).save(function (err, purchase) {
        var response = {
            e: err,
            data: purchase
        };
        console.log("response to post is", response);
        res.send(response);
    });
});
router.get("/", function (req, res) {
    purchase_1.default.find(function (err, result) {
        var response = {
            e: err,
            data: result
        };
        console.log(result);
        res.send(response);
    });
});
module.exports = router;
