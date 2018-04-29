const emptyFieldMessage = field =>
  `The field ${field} cannot be empty, please enter your ${field}.`;
const integerFieldMessage = 'Please enter a whole number.';
const withoutSpecialSymbolsFieldMessage = field =>
  `Please enter a ${field} without any special symbols.`;
const maxLengthFieldMessage = (field, maxLength) =>
  `Please enter a ${field} up to ${maxLength} symbols.`;
const validFormatFieldMessage = field =>
  `Please enter a valid format for ${field}.`;
const chooseFieldMessage = field => `Please choose ${field}.`;

export {
  emptyFieldMessage,
  integerFieldMessage,
  withoutSpecialSymbolsFieldMessage,
  maxLengthFieldMessage,
  validFormatFieldMessage,
  chooseFieldMessage,
};
