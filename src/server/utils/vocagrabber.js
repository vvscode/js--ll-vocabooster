const request = require('superagent');

const VOCAGRABBER_LIMIT = 1500;

const uniqBy = (list, propName) => {
  const hash = {};
  list.forEach(i => {
    hash[i[propName]] = i;
  });
  return Object.values(hash);
};

const splitTextToParts = text =>
  text
    .split('\n')
    .map(i => i.trim())
    .filter(i => Boolean(i))
    .reduce(
      (acc, item) => {
        const lastIndex = acc.length - 1;
        if (!acc[lastIndex].length) {
          acc[lastIndex] = item;
        } else if ((acc[lastIndex] + item).length > VOCAGRABBER_LIMIT) {
          acc.push(item);
        } else {
          acc[lastIndex] += ` ${item}`;
        }
        return acc;
      },
      [''],
    );

const getVocagrabberInfo = text =>
  Promise.all(
    splitTextToParts(text).map(part =>
      request
        .post('https://www.visualthesaurus.com/vocabgrabber/parsetext.json')
        .type('form')
        .set('Referer', 'https://www.visualthesaurus.com/vocabgrabber/')
        .set('Origin', 'https://www.visualthesaurus.com')
        .set(
          'User-Agent',
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
        )
        .send({ text })
        .then(res => res.body)
        .then(data => data.result.words),
    ),
  )
    .then(listOfListsOfWords => [].concat(...listOfListsOfWords))
    .then(listOfWords => uniqBy(listOfWords, 'word'));

module.exports = {
  getVocagrabberInfo,
};
