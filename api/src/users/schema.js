const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  id: {
    type: String,
    required: "Id is required!"
  },
  nickname: {
    type: String,
    required: "Nickname is required!"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UsersSchema);