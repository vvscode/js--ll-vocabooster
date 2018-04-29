import hash from 'object-hash';

const hashAny = (value, keysToExclude = []) => {
  if (!value) return {};

  return {
    val: value,
    key: hash(value, {
      algorithm: 'md5',
      excludeKeys: key => keysToExclude.includes(key),
    }),
  };
};

const hashArray = arr => {
  const newArray = [];

  arr.forEach(item => {
    newArray.push(hashAny(item));
  });

  return newArray;
};

export { hashArray, hashAny };
