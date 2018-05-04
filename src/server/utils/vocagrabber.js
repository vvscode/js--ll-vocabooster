const request = require('superagent');

const getVocagrabberInfo = text =>
  request
    .post('https://www.visualthesaurus.com/vocabgrabber/parsetext.json')
    .type('form')
    .send({ text })
    .then(res => res.body);

module.exports = {
  getVocagrabberInfo,
};
