import dateformat from 'dateformat';

export default function parseProfileDate(dateString) {
  try {
    return dateformat(dateString, 'isoDate');
  } catch (error) {
    console.error(error);
    return null;
  }
}
