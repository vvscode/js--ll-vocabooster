const express = require("express");
const path = require("path");
const formData = require("express-form-data");
const { getVocagrabberInfo } = require("./utils/vocagrabber");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  formData.parse({
    autoFiles: true
  })
);
app.use(formData.format());
app.use(express.static(path.join(__dirname, "public")));

app.post("/vocagrabber", (req, res) => {
  const { text } = req.body;
  getVocagrabberInfo(text).then(data =>
    res.send({ words: data.result.words.map(i => i.word).sort() })
  );
});

const server = app.listen(PORT, () =>
  console.log(`http://0.0.0.0:${server.address().port}`)
);
