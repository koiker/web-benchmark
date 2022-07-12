# Benchmark Web Server

This script will run a web server to provide benchmark data
You will be able to run a GET or PUT and download or upload requests of 100MB, 256MB or 1GB of data file

To run some tests on the performance of this web server, you can install autocannon:  
`npm -i autocannon -g`

And run the command:   
`autocannon -c 100 -d 40 -p 10 localhost:3000`

This will run 100 parallel requests for 40 seconds.

