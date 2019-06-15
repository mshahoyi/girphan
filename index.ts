const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
	res.sendFile("/client/public/index.html");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	"server running at port " + port;
});
