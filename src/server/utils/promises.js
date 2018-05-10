export const serialProcess = (list, cb) => {
  let promise = Promise.resolve();
  const listCopy = [...list];
  listCopy.forEach(item => {
    promise = promise.then(() => cb(item));
  });
  return promise;
};

export const sleep = delay =>
  new Promise(resolve => setTimeout(resolve, delay));
