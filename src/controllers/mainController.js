const { defaultService } = require("../services");

const getInfo = async (req, res) => {
  await defaultService.sendMessageDefault();
  res.status(200).json(defaultMsg);
};

module.exports = {
  getInfo,
};
