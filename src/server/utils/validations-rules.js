const NAME_REGEX = /^[\w\s.]+$/; // TO DO build correct formatting for real names (no special characters) and arabic characters
const PHONE_REGEX = /^(\+?(?=.*\d)[\d ]+$)/;
const EMAIL_REGEX = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/;
const EMIRATESID_REGEX = /\d{3}-?\d{4}-?\d{7}-?\d{1}/;
const INTEGER_NUMBER_REGEX = /^[1-9][0-9]*$/;

const PHONE_MIN_LENGTH = 11;
const NAME_MAX_LENGTH = 30;
const TRADE_NAME_MAX_LENGTH = 100;

export {
  NAME_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
  PHONE_MIN_LENGTH,
  EMIRATESID_REGEX,
  NAME_MAX_LENGTH,
  TRADE_NAME_MAX_LENGTH,
  INTEGER_NUMBER_REGEX,
};
