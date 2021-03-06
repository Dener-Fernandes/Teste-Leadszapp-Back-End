const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const expressValidator = require("express-validator");
const app = express();

app.use(cors());
app.use(express.json());
app.use(expressValidator());
app.use(routes);

app.listen(3333, () => console.log("Server On"));