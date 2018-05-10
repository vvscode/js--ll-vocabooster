import express from 'express';

const { getVocagrabberInfo } = require('server/utils/vocagrabber');
const { serialProcess } = require('server/utils/promises');
const lingualeoApi = require('lingualeo-api');

const router = express.Router();

const errorHandler = (res, status = 500) => err => {
  res.status(status);
  res.send({ err });
  console.error('[ERROR]', err);
};

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
    .catch(errorHandler(res));
});

router.post('/check-credentials', (req, res) => {
  const { email, pass } = req.body;
  lingualeoApi
    .login(email, pass)
    .then(data => res.send({ data }))
    .catch(errorHandler(res, 400));
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
    .catch(errorHandler(res));
});

export default router;
