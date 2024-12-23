'use strict';

module.exports.getItems = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};