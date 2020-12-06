module.exports.noCustomEnv = (event, context, callback) => {
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR);
  console.log('process.env.MY_ENV_VAR_FOR_BAR', process.env.MY_ENV_VAR_FOR_BAR);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      message: `hello ${process.env.MY_ENV_VAR}`,
    }),
  };
  return callback(null, response);
};

module.exports.hasCustomEnv = (event, context, callback) => {
  console.log('process.env.MY_ENV_VAR', process.env.MY_ENV_VAR);
  console.log('process.env.MY_ENV_VAR_FOR_BAR', process.env.MY_ENV_VAR_FOR_BAR);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      message: `hello ${process.env.MY_ENV_VAR_FOR_BAR}`,
    }),
  };
  return callback(null, response);
};
