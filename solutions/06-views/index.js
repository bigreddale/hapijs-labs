'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const good = require('good');
const goodConsole = require('good-console');
const vision = require('vision');
const handlebars = require('handlebars');


const goodOptions = {
  reporters: [{
    reporter: goodConsole,
    events: {log: '*', response: '*'}
  }]
};

server.connection({port: 8084});

function startServer() {
  server.route({
    method: 'GET',
    path: '/',
    handler: {
      view: {
        template: 'index',
        context: {
          welcome: 'Welcome to Hapi.js Views',
          title: 'A Hapi.js Views Example',
          message: 'A message to our viewers'
        }
      }
    }
  });

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
    throw err;
  } else {
    server.register(vision, function (err) {
      if (err) {
        throw err;
      } else {
        server.views({
          engines: {
            html: handlebars
          },
          relativeTo: __dirname,
          path: 'templates'
        });

        startServer();

      }
    });
  }
});
