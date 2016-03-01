# Hapi.js Labs

## Using the `reply` Interface

1. Using the `reply()`interface, perform the following:
    1. When the browser attempts to access `/hidden`, the server
       responds with a 403 Forbidden status.
    1. When the browser attempts to access `/plain`, the server
       returns some plain text and
       sets the MIME type (`Content-Type`) of the returned data to `text/plain`.
    1. When the browser attempts to access `/prefs`, the server
       sets a cookie, 'display-prefs' to 'easy'.
       - You'll need to consult the Hapi API documentation.
       - Verify using Chrome Dev Tools that the cookie has been set.
    1. When the browser attempts to access `/all`, the server
       performs all three of the above. Do so using the fluent API style.
1. Use the `reply()` interface to `.pipe()` a file to the browser.


## Install Boom

[`Boom`](https://github.com/hapijs/boom) offers HTTP-friendly error objects.

1. Install and `require()` _Boom_, assigning it to the variable `Boom`.
1. Consult Boom's documentation.
1. When the browser attempts to access `/forbidden`, the server
   returns a `403 Forbidden` HTTP response, with the message
   'This resource couldn\'t be found'.

## Stretch Task

1. What does this code do? You can run it, though you'll need to install the `through2` module via `npm`.

```
server.route({
  method: 'GET',
  path: '/g',
  handler: function(request, reply) {
    var reqStream = httpRequest('http://google.com/');
    reqStream.once('response', reply);
  }
});
```
