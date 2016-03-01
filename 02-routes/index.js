'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({ port: 8084 });

// TODO: add routes

server.start(function(err) {
	if (err) {
		throw err;
	}

	console.log('listening on', server.info.uri);

});
