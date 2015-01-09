// modulo de xmlRPC
var xmlrpc = require('xmlrpc')

// cria servidor na porta 5000
var server = xmlrpc.createServer({port: 5000});


// resposta a metodos desconhecidos (gerados pelo parser de xml)
server.on('NotFound', function(method, params) {
	console.log('Method ' + method + ' does not exist');	
})

server.on('add', function (err, params, callback) {
  //debug
  console.log('Method call params for \'add\': ' + params);
  console.log(params);
  var result = 0;
// Envia a resposta com o valor do resultado

  callback(null, result)
});

// resposta a metodos registados
server.on('add', function (err, params, callback) {
  //debug
  console.log('Method call params for \'add\': ' + params);

  var result = params;
// Envia a resposta com o valor do resultado

  callback(null, result)
});

console.log('XML-RPC server listening on port 5000')


