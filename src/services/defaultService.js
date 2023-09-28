const { ServerError } = require("../utils/errors");

const defaultMsg = "Hola, funciona";

const sendMessageDefault = async () => {
  if (!defaultMsg) throw new ServerError("No message created", 501);
  return defaultMsg;
};

module.exports = {
  sendMessageDefault,
};
