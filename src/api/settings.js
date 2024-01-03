const settings = {
  dev: {
    apiUrl: 'https://api.giphy.com/v1',
  },
  local: {
    apiUrl: 'https://api.giphy.com/v1',
  },
  staging: {
    apiUrl: 'https://api.giphy.com/v1',
    apiKey: 'YIgFoVU5Y8vghmhTR4LmyhZffICVJHA7',
  },
  production: {
    apiUrl: 'https://api.giphy.com/v1',
  },
};

const getCurrentSettings = () => {
  return settings.staging;
};

export default getCurrentSettings();
