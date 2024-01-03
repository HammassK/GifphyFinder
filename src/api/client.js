import {create} from 'apisauce';

import authStorage from '../auth/storage';
import settings from './settings';

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async request => {
  if (typeof window !== 'undefined') {
    const authToken = await authStorage.getToken();

    if (!authToken) {
      return;
    }

    request.headers.Authorization = 'Bearer ' + authToken;
  }
});

export default apiClient;
