import BaseApi from './BaseApi';

export default class internalApi extends BaseApi {
  static getUserProfile = () => internalApi.get('/profile');
}
