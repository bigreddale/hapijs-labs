# Hapi.js Labs

## 03 Adding Logging using `good`

1. Install the `good` and `good-console` plugins and `require()` them into your server.
1. Create a `goodOptions` object, containing an array of `reporters`.
   Just add one reporter, the Good Console reporter.
   It'll look something like this:
   
   ```
   const goodOptions = {
     reporters: [
        ...
     ]
   };
   ```
   See the [Good documentation](https://github.com/hapijs/good) for an example. 
1. Tell Hapi about the Good plugin by registering it with `server.register()`.
1. Now to generate some log messages:
    1. When your server has started,
       use `server.log()` to generate a log event,
       with the tags 'server' and 'start', and the message 'Server started'.
    1. When a request is received,
       use `request.log()` to generate a log event
       with the tag 'info'.
        - We will need to tell Good to monitor "request" events.
          To do this, add `request: 'info'` to the Good Options `reporter[0].events` property
          in your configuration.
1. Send some requests to your server and make sure that log events are being written to the console.

