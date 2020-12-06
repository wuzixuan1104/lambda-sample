module.exports = (event, context, callback) => {
  console.log('process.env.MY_SECRET', process.env.MY_SECRET);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      message: `my super secret thing ${process.env.MY_SECRET}`,
    }),
  };
  return callback(null, response);
};
