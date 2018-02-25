const express = require("express");
const path = require("path");
const formData = require("express-form-data");
const { getVocagrabberInfo } = require("./utils/vocagrabber");
const lingualeoApi = require("lingualeo-api");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(
  formData.parse({
    autoFiles: true
  })
);
app.use(formData.format());
app.use(express.static(path.join(__dirname, "public")));

app.post("/vocagrabber", (req, res) => {
  const { text } = req.body;
  let words;
  getVocagrabberInfo(text)
    .then(data => data.result.words.map(i => i.word).sort())
    .then(extractedWords => {
      words = extractedWords;
      return Promise.all(words.map(word => lingualeoApi.getTranslates(word)));
    })
    .then(translates =>
      words.reduce((acc, word, index) => {
        acc[word] = translates[index]
          .sort((a, b) => (a.votes > b.votes ? 1 : a.votes == b.votes ? 0 : -1))
          .reverse()[0].value;
        return acc;
      }, {})
    )
    .then(data => res.send({ data }))
    .catch(err => console.log(err));
});

const server = app.listen(PORT, () =>
  console.log(`http://0.0.0.0:${server.address().port}`)
);
