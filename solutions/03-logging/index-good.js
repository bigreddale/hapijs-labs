'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const good = require('good');
const goodConsole = require('good-console');

const goodOptions = {
  reporters: [{
    reporter: goodConsole,
    events: { log: '*', response: '*'}
  }]
};

server.connection({ port: 8080 });

server.route({
  method: 'GET',
  path: '/{p*}',
  handler: echo
});

function echo(request, reply) {
  reply(request.params);
}

function startServer() {
  server.start(function(err) {
    if (err) {
      throw err;
    }

    console.log('listening on', server.info.uri);
  });
}

server.register({
  register: good,
  options: goodOptions
}, function(err) {
  if (err) {
    console.error(err);
  } else {
    startServer();
  }
});

