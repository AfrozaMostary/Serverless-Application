module.exports = async function (context, req) {
    context.res = {
      status: 200,
      body: {
        message: 'Serverless function executed successfully!',
        input: req.body,
      },
    };
  };