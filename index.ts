const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const crudRouter = require("./routes/crud.ts");
const mongoose = require("mongoose");

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/girphan", {
	useNewUrlParser: true
});
const db = mongoose.connection;
db.once("open", () => console.log("database connected"));

app.use("/crud", crudRouter);

app.get("*", (req, res) => {
	res.sendFile("/client/build/index.html");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	"server running at port " + port;
});
