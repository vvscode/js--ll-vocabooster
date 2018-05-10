const getFormdata = data => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  return formData;
};

export const getWords = text =>
  fetch('/api/vocagrabber', {
    method: 'POST',
    body: getFormdata({ text }),
  })
    .then(r => r.json())
    .then(({ data: list }) =>
      list.map((item, index) => ({ ...item, id: index })),
    );

export const addWordsToLingualeoVocabulary = (email, pass, words) =>
  fetch('/api/add-words', {
    method: 'POST',
    body: getFormdata({
      email,
      pass,
      words: JSON.stringify(words),
    }),
  });

export const checkCredentials = (email, pass) =>
  fetch('/api/check-credentials', {
    method: 'POST',
    body: getFormdata({
      email,
      pass,
    }),
  })
    .then(r => {
      if (!r.ok) {
        console.log('checkCredentials', r, r.ok);
        throw Error(r.statusText);
      }
      return r;
    })
    .then(r => r.json());
