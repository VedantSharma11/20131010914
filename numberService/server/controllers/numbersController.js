const numbersService = require('../services/numbersService');

exports.getNumbers = async (req, res) => {
  try {
    const urls = req.query.url;
    const output = await numbersService.mergeUniqueNumbers(urls);
    res.json(output);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
