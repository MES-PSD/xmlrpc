<?php
$request_xml = file_get_contents("php://input");
function add($method_name, $args, $app_data) {
    return $args[0]+$args[1];
}

function sub($method_name, $args, $app_data) {
    return $args[0]-$args[1];
}

$xmlrpc_server = xmlrpc_server_create();
xmlrpc_server_register_method($xmlrpc_server, "add", "add");
xmlrpc_server_register_method($xmlrpc_server, "sub", "sub");
header('Content-Type: text/xml');
print 

xmlrpc_server_call_method($xmlrpc_server, $request_xml, null);
?>