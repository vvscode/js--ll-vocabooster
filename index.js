const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.get("/api/hola", (req, res) =>
  res.send({
    message: "Hola from BE"
  })
);

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () =>
  console.log(`http://0.0.0.0:${server.address().port}`)
);
