const http = require('http');
const fs   = require('fs');
const url = require('url');
const port = 3000;

http.createServer((req, res) => {
	if (req.url === '/html') {
		let html = fs.readFile('index.html', (err, data)=>{
			res.contentType='text/plain';
			res.end(data);
		});
	}

	else if (req.url === '/png') {
		let png = fs.readFile('34.png', (err, data)=>{
			res.contentType='text/plain';
			res.end(data);
		});
	}

	else if (req.url === '/api/name') {
		res.writeHead(200, {'content-type':'text/plain'});
		res.end('Kasper Natalia Viktorovna');
	}

	else if (req.url === '/xmlhttprequest') {
		let html = fs.readFile('xmlhttprequest.html', (err, data)=>{
			res.contentType='text/plain';
			res.end(data);
		});
	}

	else if (req.url === '/fetch') {
		let html = fs.readFile('fetch.html', (err, data)=>{
			res.contentType='text/plain';
			res.end(data);
		});
	}

	else if (req.url === '/jquery') {
		let html = fs.readFile('./jquery.html', (err, data)=>{
			res.contentType='text/plain';
			res.end(data);
		});
	}
}).listen(3000);