var xmlrpc = require('xmlrpc')

// Creates an XML-RPC server to listen to XML-RPC method calls
var server = xmlrpc.createServer({port: 5000});

// Handle methods not found
server.on('NotFound', function(method, params) {

  console.log('Method ' + method + ' does not exist');
})
// Handle method calls by listening for events with the method call name
server.on('add', function (err, params, callback) {
  console.log('Method call params for \'add\': ' + params);


  // ...perform an action...

  // Send a method response with a value

  callback(null, params[0]+params[1])
});

console.log('XML-RPC server listening on port 5000')


// Waits briefly to give the XML-RPC server time to start up and start
// listening
setTimeout(function () {
  // Creates an XML-RPC client. Passes the host information on where to
  // make the XML-RPC calls.
  var client = xmlrpc.createClient({ port: 5000, path: '/'})

  // Sends a method call to the XML-RPC server
  client.methodCall('add', [1,2], function (error, value) {
    // Results of the method response
    console.log('Method response for \'add\': ' + value)
  })

}, 1000)