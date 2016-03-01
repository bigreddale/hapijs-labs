'use strict';

const fs = require('fs');
const Hapi = require('hapi');
const Boom = require('boom');
const httpRequest = require('request');
const through = require('through2');


const server = new Hapi.Server();

server.connection({ port: 8085 });


server.route({
  method: 'GET',
  path: '/hidden',
  handler: function(request, reply) {
    const response = reply("hello, world!");
    response.code(403);
  }
});

server.route({
  method: 'GET',
  path: '/plain',
  handler: function(request, reply) {
    const response = reply("hello, world!");
    response.type('text/plain');
  }
});

server.route({
  method: 'GET',
  path: '/prefs',
  handler: function(request, reply) {
    const response = reply("hello, world!");
    response.state('display-prefs', 'easy');
  }
});

server.route({
  method: 'GET',
  path: '/forbidden',
  handler: function(request, reply) {
    reply(Boom.forbidden('This resource couldn\'t be found'));
  }
});

server.route({
  method: 'GET',
  path: '/file',
  handler: function(request, reply) {
    reply(fs.createReadStream('foo.txt'));
  }
});


// This is for the stretch task
server.route({
  method: 'GET',
  path: '/g',
  handler: function(request, reply) {
    var reqStream = httpRequest('http://google.com/');
    reqStream.once('response', reply);
  }
});


server.start(function(err) {
	if (err) {
		throw err;
	}

	console.log('listening on', server.info.uri);
});

