import express from 'express';

const { getVocagrabberInfo } = require('server/utils/vocagrabber');
const lingualeoApi = require('lingualeo-api');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Public API',
  });
});

router.post('/vocagrabber', (req, res) => {
  const { text } = req.body;
  let words;
  console.log(text);
  getVocagrabberInfo(text)
    .then(data => data.result.words.map(i => i.word).sort())
    .then(extractedWords => {
      words = extractedWords;
      return Promise.all(words.map(word => lingualeoApi.getTranslates(word)));
    })
    .then(translates =>
      words.map((word, index) => ({
        word,
        translation: translates[index]
          /* eslint-disable no-nested-ternary */
          .sort(
            (a, b) => (a.votes > b.votes ? 1 : a.votes === b.votes ? 0 : -1),
          )
          .reverse()[0].value,
      })),
    )
    .then(data => res.send({ data }))
    .catch(err => console.log(err));
});

export default router;
