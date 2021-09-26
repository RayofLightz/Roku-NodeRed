const request = require('superagent');

module.exports = function(RED) {
  function rokuSendKeypress(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    const server = RED.nodes.getNode(config.server);

    node.on('input', (msg) => {
      const keypress = msg.payload;
      request.post(`http://${server.host}:${server.port}/keypress/${keypress}`)
        .send('')
        .then((res) => {
          node.send();
        }).catch((err) => {
          node.error(err, msg);
        });
    });
  }

  RED.nodes.registerType('roku-keypress', rokuSendKeypress);
};
