"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path = require("path");
var app = express_1.default();
var bodyParser = require("body-parser");
var crudRouter = require("./routes/crud");
var mongoose = require("mongoose");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use(express_1.default.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
var local_db_uri = "mongodb://localhost:27017/girphan";
var db_uri = process.env.NODE_ENV === "development"
    ? local_db_uri
    : process.env.DB_URI || local_db_uri;
console.log(db_uri);
mongoose.connect(db_uri, {
    useNewUrlParser: true
});
var db = mongoose.connection;
db.once("open", function () { return console.log("database connected"); });
app.use("/crud", crudRouter);
app.get("*", function (req, res) {
    res.sendFile("/client/build/index.html");
});
var port = process.env.SERVER_PORT || 5000;
app.listen(port, function () {
    "server running at port " + port;
});
