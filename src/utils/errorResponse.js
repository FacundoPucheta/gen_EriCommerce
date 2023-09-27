const errResponse = (res, status, message) => {
  res.status(status).json({
    error: true,
    message,
  });
};

module.exports = errResponse;
