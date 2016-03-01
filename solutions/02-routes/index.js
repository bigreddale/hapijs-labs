'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8084 });

server.route({
  method: 'GET',
  path: '/a/b/{p*}',
  handler: echo
});

server.route({
  method: 'GET',
  path: '/{q*5}',
  handler: echo
});

function echo(request, reply) {
  reply(request.params);
}

server.start(function(err) {
	if (err) {
		throw err;
	}

	console.log('listening on', server.info.uri);

});
