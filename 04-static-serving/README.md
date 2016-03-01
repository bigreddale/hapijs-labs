# Hapi.js Labs

## 04 Using the `inert` Plugin for Static File Serving

### Serving a Static File using `reply.file()`

To serve static files, we'll use [`inert`](https://github.com/hapijs/inert).

1. Install the `inert` plugin, and `require()` it into your server code.
1. Register the `inert` plugin with the Hapi `server`.
   - If you have already registered `good`, you'll need to register `inert`
     in the 'success' branch of its `if (err)...`.
     If you need help, there's an option (which we will improve later) in `optional/register-both-good-and-inert.js`.
1. Add a handler to serve the file `public/public1.html` using `reply.file()`.

### A Shortcut

1. Writing a function to do that was hard work.
   Instead, serve the file using the `file` handler:

    ```
    ...
    handler: {
        file: 'path/to/myfile.html'
    }
    ...
    ```

   - If you get an "Error: Unknown handler: file", the problem is that the route was defined
     _before_ the `inert` plugin was registered.
     To solve this, make sure you define your route _after_ `inert` has successfully registered.


### Serving a Directory

1. We still have a problem though. The HTML page loads, but not the image or the CSS.
   To fix it, we need to serve the whole `public` directory.
   - Use the `directory` handler to make this happen.

Stretch Tasks

1. Using the [`inert` documentation](https://github.com/hapijs/inert#inert), do the following:
    1. Switch on `listing` to have `inert` generate a directory listing if you don't specify a document.
    1. Verify that `redirectToSlash` does as it intends.


