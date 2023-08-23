const axiosUtils = require('../utils/axiosUtils');

exports.mergeUniqueNumbers = async (urls) => {
  const uniqueNumbers = new Set();
  const fetchPromises = [];

  for (const url of urls) {
    fetchPromises.push(
      axiosUtils.fetchNumbersFromUrl(url)
        .then(numbers => {
          numbers.forEach(number => uniqueNumbers.add(number));
        })
        .catch(error => {
          console.error(error.message);
        })
    );
  }

  await Promise.all(fetchPromises);

  return { numbers: [...uniqueNumbers].sort((a, b) => a - b) };
};
