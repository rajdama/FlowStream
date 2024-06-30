const express = require("express");
const uploadRouter = require("./routes/upload.route.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const port = 8080;

const app = express();
app.use(
  cors({
    allowedHeaders: ["*"],
    origin: "*",
  })
);

app.use(express.json());
app.use("/upload", uploadRouter);

app.get("/", (req, res) => {
  res.send("HHLD");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
