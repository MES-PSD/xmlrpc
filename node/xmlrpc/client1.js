var xmlrpc = require('xmlrpc');

// cria um cliente xmlrpc
// ponta para localhost, porto 5000
var client = xmlrpc.createClient({ port: 5000, path: '/'})

  // faz uma chamapa remota ao metodo add
client.methodCall('add', [1,2], function (error, value) {
    // faz algo com a resposta
    console.log('Method response for \'add\': ' + value)
  });

var value= {
	intname : 1,
	strname : {
		fname:'a',
		lname:'b'
	}
}

client.methodCall('add', [value,value,'str'], function (error, value) {
    // faz algo com a resposta
    console.log('Method response for \'add\': ' + value)
  });
