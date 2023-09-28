const { defaultService } = require("../services");
const { response, catchedAsync } = require("../utils/");

const getInfo = async (req, res) => {
  const defualtMessage = await defaultService.sendMessageDefault();
  response(res, 200, defualtMessage);
};

module.exports = {
  getInfo: catchedAsync(getInfo),
};
