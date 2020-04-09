const model = require('./schema');

exports.create = async (data) => {
  let jsonToStringData = JSON.parse(data);

  const users = new model(jsonToStringData);

  await users.save()
    .then(result => {
      console.log(result);
      return result
    })
    .catch((error) => {
      console.log(error);
      return {code: 500, error}
    })
};