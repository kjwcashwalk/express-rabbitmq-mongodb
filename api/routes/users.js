const express = require('express');
const router = express.Router();
const amqpManager = require('../lib/amqp');

/* GET users listing. */
router.get('/', function(req, res, next) {
  amqpManager.connect()
    .then((channel) => {
      amqpManager.sendMessageToQueue(channel, 'helloqueue',
        `Hello from RabbitMQ! ${new Date().getTime()}`)
        .then(msg => {
          console.log(`msg : ${msg}`)
        })
        .catch(error => {
          console.log(error);
        });
      res.status(200).json({status: 'okay'});
    })
    .catch((error) => {
      res.status(400).json({error: error});
    });
});

router.post('/', function(req, res, next) {
  amqpManager.connect()
    .then((channel) => {
      amqpManager.sendMessageToQueue(channel, 'helloqueue', 'Hello from RabbitMQ!');
      res.status(200).json({status: 'okay'});
    })
    .catch((error) => {
      res.status(400).json({error: error});
    });
});

module.exports = router;
