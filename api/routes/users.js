const express = require('express');
const router = express.Router();
const amqpManager = require('../lib/amqp');
const {list} = require('../src/users/service');

/* GET users listing. */
router.get('/', list);

router.post('/', function(req, res, next) {
  amqpManager.connect()
    .then((channel) => {
      amqpManager
        .sendMessageToQueue(
          channel,
          'helloqueue',
          `{"id": ${new Date().getTime()}, "nickname": "gildong"}`
        );
      res.status(200).json({status: 'okay'});
    })
    .catch((error) => {
      res.status(400).json({error: error});
    });
});

module.exports = router;
