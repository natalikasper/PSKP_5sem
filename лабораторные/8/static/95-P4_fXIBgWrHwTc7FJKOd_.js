let http = require('http');
let url = require('url');
let fs = require('fs');
const {parse} = require('querystring');
//postman
//body
//x-www-form-urlencoded
//ввести значения

//открыть 16form.html
//при нажатии на кнопку перенаправится само
http.createServer((req, res)=>{
    if(req.method = 'POST'){
        let body='';
		let result='<br/>';
		req.on('data',chunk=>{body+=chunk.toString();});
		req.on('end',()=>{
			console.log(body);
			let o = parse(body);
			for(let key in o) {result+=`${key}=${o[key]}<br/>`}
		res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
		res.end(result);})
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.end('no other http-method not so');
    }
}).listen(5000);