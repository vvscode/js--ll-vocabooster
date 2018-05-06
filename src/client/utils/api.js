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

export const addWordsToLingualeoVocabulary = words => Promise.resolve();
