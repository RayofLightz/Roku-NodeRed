module.exports = function(RED) {
  function rokuConfigNode(node) {
    RED.nodes.createNode(this, node);
    this.host = node.host;
    this.port = node.port;
  }

  RED.nodes.registerType('roku-config', rokuConfigNode);
};
