import apiClient from '../client';
import endpoints from '../endpoints';
import settings from '../settings';

export const getSearchResult = async query => {
  return new Promise(async (resolve, reject) => {
    const res = await apiClient.get(
      endpoints.GIFS +
        endpoints.SEARCH +
        `?q=${query}&api_key=${settings.apiKey}`,
    );

    console.log('===========res.data=========>', res.data);

    if (res.status === 200) {
      resolve(res.data);
    } else if (res.status === 204) {
      resolve(res);
    } else {
      reject(res.data);
    }
  });
};
