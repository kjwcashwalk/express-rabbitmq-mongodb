const amqp = require('amqplib/callback_api');
const connectDB = require('./src/db');
const {create} = require('./src/users/service');

amqp.connect(process.env.MESSAGE_QUEUE || 'amqp://localhost', function(error0, connection) {
  if (error0) {
    console.error(error0);
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    connectDB();

    var queue = 'helloqueue';

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, function(msg) {
      create(msg.content.toString());
      console.log(" [x] Received %s", msg.content.toString());
    }, {
      noAck: true
    });
  });
});