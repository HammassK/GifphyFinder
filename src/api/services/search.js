import apiClient from "../client";
import endpoints from "../endpoints";
import settings from "../settings";

export const getSearchResult = async (query, offset = 0) => {
  try {
    const res = await apiClient.get(
      `${endpoints.GIFS}${endpoints.SEARCH}?q=${query}&api_key=${settings.apiKey}&offset=${offset}`
    );

    if (res.status === 200) {
      return res.data;
    } else if (res.status === 204) {
      return res;
    } else {
      throw new Error(res.data);
    }
  } catch (error) {
    throw error;
  }
};
