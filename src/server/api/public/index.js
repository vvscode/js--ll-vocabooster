import express from 'express';

const { getVocagrabberInfo } = require('server/utils/vocagrabber');
const { serialProcess } = require('server/utils/promises');
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

router.post('/check-credentials', (req, res) => {
  const { email, pass } = req.body;
  lingualeoApi
    .login(email, pass)
    .then(data => res.send({ data }))
    .catch(err => {
      res.status(400);
      res.send({ err });
      console.error('/check-credentials:', `${email}: ${pass}`, err);
    });
});

router.post('/add-words', (req, res) => {
  const { email, pass, words } = req.body;

  lingualeoApi
    .login(email, pass)
    .then(() => {
      const parsedWords = JSON.parse(words);
      return serialProcess(parsedWords.filter(word => word.translation), word =>
        lingualeoApi.addWord(word.word, word.translation),
      );
    })
    .then(data => res.send({ data }))
    .catch(err => {
      res.status(500);
      res.send({ err });
      console.error('/add-words', JSON.stringify(words), err);
    });
});

export default router;
