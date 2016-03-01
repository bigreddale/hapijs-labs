// ...

/* When registering two plugins, one option is to do it this way.
 * It's not ideal though, as it gets messy. In the next module we
 * find a solution.
 */

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
    console.log('Plugin "good" registered');

    server.register(inert, function(err) {
      if (err) {
        throw err;
      }
      console.log('Plugin "inert" registered');

      startServer();
    });
  }
});

