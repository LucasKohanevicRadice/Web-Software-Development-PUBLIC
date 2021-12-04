/* When making a request to a web application using a browser or cURL, or when a web application responds to a request, the protocol that is being used is HTTP.
    We can look at the request in more detail using the "--verbose" or "-v" flag of cURL  */

/*

curl -v http://localhost:7777
...
> GET / HTTP/1.1
> Host: localhost:7777
...
< HTTP/1.1 200 OK
< content-length: 13
<
Hello world! 

*/