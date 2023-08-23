const axios = require('axios');

exports.fetchNumbersFromUrl = async (url) => {
  try {
    const response = await axios.get(url, { timeout: 1000 });
    if (response.status === 200) {
      const data = response.data;
      return data.numbers;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
