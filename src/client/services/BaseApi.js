import baseFetch from 'universal-fetch';
import cookie from 'react-cookies';
import createFetch from '../utils/createFetch';
import history from '../utils/history';

const fetch = createFetch(baseFetch, {
  baseUrl: '',
});

const NOT_AUTHORIZED_ERROR_MESSAGE = 'Access denied, please login into the app';

const createNotAuthError = () => new Error(NOT_AUTHORIZED_ERROR_MESSAGE);

export default class internalApi {
  static get(urlPath) {
    return fetch(`/api${urlPath}`, {
      method: 'GET',
    })
      .then(resp => {
        if (resp.status === 401) {
          throw createNotAuthError();
        }
        if (resp.status === 403) {
          history.push('/home');
          window.location.reload();
          return false;
        }
        if (resp.status >= 400) {
          resp.json().then(result => {
            console.log(result);
          });
          return false;
        }
        return resp.text();
      })
      .then(text => {
        try {
          return JSON.parse(text);
        } catch (err) {
          console.log(`/api${urlPath} error`, err, text);
          throw err;
        }
      })
      .catch(error => {
        console.error('internalApi.get Error:', error);
        throw error;
      });
  }

  static post(urlPath, jsonData = {}) {
    const xsrf = { 'csrf-token': cookie.load('XSRF-TOKEN') };

    return fetch(`/api${urlPath}`, {
      headers: xsrf,
      method: 'POST',
      body: JSON.stringify(jsonData),
    })
      .then(resp => {
        if (resp.status === 401) {
          throw createNotAuthError();
        }
        if (resp.status === 403) {
          history.push('/home');
          window.location.reload();
          return false;
        }
        if (resp.status >= 400) {
          console.log('=======');
          console.log('POST Error response = ', resp);
          console.log('=======');
          resp.json().then(result => {
            console.log(result);
          });
          return false;
        }
        return resp;
      })
      .catch(error => {
        console.error('internalApi.post Error:', error);
        throw error;
      });
  }

  static put(urlPath, jsonData = {}) {
    const xsrf = { 'csrf-token': cookie.load('XSRF-TOKEN') };
    return fetch(`/api${urlPath}`, {
      headers: xsrf,
      method: 'PUT',
      body: JSON.stringify(jsonData),
    })
      .then(resp => {
        if (resp.status === 401) {
          throw createNotAuthError();
        }
        if (resp.status === 403) {
          history.push('/home');
          window.location.reload();
          return false;
        }
        if (resp.status >= 400) {
          resp.json().then(result => {
            console.log(result);
          });
          return false;
        }
        return resp.json();
      })
      .catch(error => {
        console.error('internalApi.put Error:', error);
        throw error;
      });
  }
}
