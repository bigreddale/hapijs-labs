# Hapi.js Labs


## 02 Defining Routes

The directory `02-routes` contains a skeleton server with a route defined.

1. Run the server.
   Access the route from a web browser.
1. Rather than have a hardcoded productId, we need a parameter.
    - Change the route to `'/products/{productId}'`.
    - Which paths from the browser access this route? Does `/products` return
      an object (an empy object is still a success)
      or does it produce an error?
   Parameters can be located anywhere in the path,
   and can cover at most a single 'segment' (separated by `/`),
   for example ``/{myparam}'`.
   They can even cover a part of a segment (`'/filename.{extension}'`).

1. __Optional Parameters__ So that clients can still access `/products`,
   we can specify parameters as optional.
    - Change the route path to `'/products/{productId?}'` and check that an object
      is returned when you access a path that matches.
    - What does `'/products/3/details'` return?
   Optional parameters are only allowed at the end of the path
   or if they cover a part of a path segment.

    - Change the route to allow in incoming path of `/categories/food/products/sushi-combo-16`.
      Make sure that it also works with `/categories/jeans/products/levis-505-regular-fit`
    - Does Hapi allow the category to be optional?

1. __Wildcard Parameters__ Hapi also supports wildcard parameters in the last segment.
   For example, the route '/products/{productId?}' matches '/products/' with the
   value of `request.params.productId` set to an empty string `''`.
    - Change the route path to `'/objects/{objectId*}'`.
    - What paths could match this? Try appending further segments to the browser path,
      for example `http://localhost:8084/objects/463/7/22/1`.
    - You can restrict the depth of the path by adding a number (greater than 1)
      after the '*', for example `/objects/{objectId*3}'`.
      Is this an _exactly_ match or an _at most_ match?

1. __Path matching order__
   Hapi matches routes based on their _specificity__.
   Routes are matched in order from most specific to least specific.
   So the order you place them in your source code doesn't affect the
   order in which Hapi evaluates them.
    - Which is more specific, `/a/b/{p*}` or `/{q*5}`? Confirm your answer.
      Make sure you can exercise both routes.


