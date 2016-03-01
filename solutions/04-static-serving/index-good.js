'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const good = require('good');
const goodConsole = require('good-console');
const inert = require('inert');
const path = require('path');


const goodOptions = {
  reporters: [{
    reporter: goodConsole,
    events: {log: '*', response: '*'}
  }]
};

server.connection({port: 8084});


server.route({
  method: 'GET',
  path: '/q1',
  handler: function (request, reply) {
    var filePath = path.join(__dirname, 'public/public1.html');
    reply.file(filePath);
  }
});


function startServer() {
  server.start(function (err) {
    if (err) {
      throw err;
    }

    console.log('listening on', server.info.uri);
  });
}

server.register({
  register: good,
  options: goodOptions
}, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Plugin "good" registered');

    server.register(inert, function (err) {
      if (err) {
        throw err;
      }
      console.log('Plugin "inert" registered');

      server.route({
        method: 'GET',
        path: '/q2',
        handler: {
          file: 'public/public1.html'
        }
      });


      server.route({
        method: 'GET',
        path: '/q3/{path*}',
        handler: {
          directory: {
            path: 'public'
          }
        }
      });

      startServer();
    });
  }
});

