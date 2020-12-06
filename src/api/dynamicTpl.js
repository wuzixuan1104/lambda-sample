module.exports.queryParamsExample = (event, context, callback) => {
  const name =
    event.queryStringParameters && event.queryStringParameters.name
      ? event.queryStringParameters.name
      : '';
  const helloParagraph = greetPerson(name);

  return callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: generateHtmlPage(helloParagraph),
  });
};

module.exports.pathParamsExample = (event, context, callback) => {
  const name =
    event.pathParameters && event.pathParameters.name
      ? event.pathParameters.name
      : '';

  /* generate the hello paragraph */
  const helloParagraph = greetPerson(name);

  // callback is sending HTML back
  return callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: generateHtmlPage(helloParagraph),
  });
};

const greetPerson = name => {
  const userName = name || 'Unknown Person';
  return `<p>Hey ${userName}</p>`;
};

const generateHtmlPage = content => `
    <html>
      <style>
        h1 { color: #73757d }
      </style>
      <body>
        ${content}
      </body>
    </html>`;
