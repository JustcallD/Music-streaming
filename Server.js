require("dotenv").config();
require("./Config/DBConfig");
const express = require("express");
const app = express();
const musicRouter = require("./Router/musicRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", musicRouter);

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
