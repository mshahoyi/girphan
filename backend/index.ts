import express from "express";
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const crudRouter = require("./routes/crud");
const mongoose = require("mongoose");
import dotenv from "dotenv";

dotenv.config();

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(bodyParser.json());

const local_db_uri = "mongodb://localhost:27017/";
const db_uri =
	process.env.NODE_ENV === "development"
		? local_db_uri
		: process.env.DB_URI || local_db_uri;
mongoose.connect(
	db_uri,
	{
		useNewUrlParser: true,
		dbName: "girphan"
	},
	(e: any) =>
		console.log(
			"Error connecting to database with URI " + db_uri + " due to " + e
		)
);
const db = mongoose.connection;
db.once("open", () => console.log("database connected"));

app.use("/crud", crudRouter);

app.get("*", (req: express.Request, res: express.Response) => {
	res.sendFile("/client/build/index.html");
});

const port = process.env.SERVER_PORT || 5000;

app.listen(port, () => {
	"server running at port " + port;
});
