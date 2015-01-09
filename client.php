<?php
$request = xmlrpc_encode_request("sub", array(1,2));
$context = stream_context_create(array('http' => array(
    'method' => "POST",
    'header' => "Content-Type: text/xml",
    'content' => $request
)));
/**
 * This URL does not exist. Replace it with your server URL
 */
//$server = 'http://localhost/sir1415/xmlrpc/server.php';
// no cors needed
$server = 'http://localhost:5000';
//$file = file_get_contents($server);
$file = file_get_contents($server, false, $context);
$response = xmlrpc_decode($file);
echo 
"response " . $response;
?>