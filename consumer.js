var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5675', function (error, connection) {
  if (error) throw error;

  connection.createChannel(function (error, channel) {
    if (error) throw error;
    var queue = 'sneakers';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.consume(queue, function (msg) {
      console.log(msg.content.toString());
    }, { noAck: true });
  });
});