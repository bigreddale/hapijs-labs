'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
var inert = require('inert');


server.connection({ port: 8080 });

server.route({
	method: 'GET',
	path: '/',
	handler: hello
});

server.register(inert, function(err) {
	if (err) {
		throw err;
	}
	console.log('Plugin "inert" registered');
});

server.route({
	method: 'GET',
	path: '/public/{param*}',
	handler: {
		directory: {
			path: 'public'
		}
	}
});

function hello(request, reply) {
	reply('<p>Hello! :-)</p>');
}

server.start(function(err) {
	if (err) {
		throw err;
	}

	console.log('listening on', server.info.uri);

});
