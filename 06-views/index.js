'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const good = require('good');
const goodConsole = require('good-console');

/* TODO: install/require vision */
/* TODO: install/require handlebars */


const goodOptions = {
  reporters: [{
    reporter: goodConsole,
    events: {log: '*', response: '*'}
  }]
};

server.connection({port: 8084});

const contextObj = {
  welcome: 'Welcome to this context object',
  title: 'A Hapi.js Views Example',
  message: 'This is a context object for the /function-form example'
};

function startServer() {

  server.route({
    method: 'GET',
    path: '/function-form',
    handler: /* TODO: use the function form to populate
              * the Handlebars template 'index'
              * with the object 'contextObj' above.
              * */
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: /* TODO: use the configuration object form to populate
     * the Handlebars template 'index'
     * with this object:
     *
       {
         welcome: 'Welcome to Hapi.js Views',
         title: 'A Hapi.js Views Example',
         message: 'A message to our viewers'
       }
     */
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
        server.views(

          /* TODO: configure vision to use handlebars and serve from the templates folder */

        );

        startServer();

      }
    });
  }
});
