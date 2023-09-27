const response = (res, status, data) => {
  res.status(status).json({
    error: false,
    data,
  });
};

module.exports = response;
