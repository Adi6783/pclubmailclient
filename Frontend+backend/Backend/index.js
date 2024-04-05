const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());

const mainRouter = require("./routes/index");



app.use("/api/vi", mainRouter);
app.listen(3000);

