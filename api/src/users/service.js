const model = require('./schema');

exports.list = async (req, res, next) => {
  const users = await model.find();

  return res.status(200).json(users);
};