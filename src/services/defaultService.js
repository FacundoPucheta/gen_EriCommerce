const defaultMsg = "Hola, funciona";

const sendMessageDefault = async () => {
  if (!defaultMsg) throw new Error("AHHHHHH ERROR");
  return defaultMsg;
};

module.exports = {
  sendMessageDefault,
};
