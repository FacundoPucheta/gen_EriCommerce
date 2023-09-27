const getInfo = async (req, res) => {
  const defaultMsg = "Hola, funciona";
  res.status(200).json(defaultMsg);
};

module.exports = {
  getInfo,
};
