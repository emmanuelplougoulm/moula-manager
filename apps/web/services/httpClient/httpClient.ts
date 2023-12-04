const API_BASE_URL = 'http://localhost:9000';
const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
}

export const httpClient = (endpoint: string, customOptions = {}) => {
  const options = {
    ...defaultOptions,
    ...customOptions,
  };

  return window.fetch(`${API_BASE_URL}/${endpoint}`, options).then(async (response) => {
    if (response.ok) {
      return response.text().then((text) => (text ? JSON.parse(text) : {}));
    } else {
      const { message } = await response.json();

      throw new Error(message);
    }
  }
  )
}
