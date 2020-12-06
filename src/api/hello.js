module.exports = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hi Shari! Hello World!!',
      event,
    }),
  };
  /** callback(error, response) */
  return callback(null, response);
};
