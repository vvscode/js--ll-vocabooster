import window from './window';

const data = (window && window.App) || {};

export const isLoggedIn = () =>
  !!data.user && Object.keys(data.user).length > 0;

export default data;
