'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8084 });

server.route({
	method: 'GET',
	path: '/',
	handler: hello
});

function hello(request, reply) {
	reply('<p>Hello!</p>');
}

server.start(function(err) {
	if (err) {
		throw err;
	}

	console.log('listening on', server.info.uri);
});

