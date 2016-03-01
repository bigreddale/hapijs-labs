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
1. Send some requests to your server and make sure that log events are being written to the console.

