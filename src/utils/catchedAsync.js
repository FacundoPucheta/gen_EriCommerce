// This function it's for a 'cleaner' code. This will return the executed fn and catch the error, and pass the error to express to be handled

const catchedAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = catchedAsync;
