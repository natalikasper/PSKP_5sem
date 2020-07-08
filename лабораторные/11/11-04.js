//Сервер принимает сообщение вида: 
//{ timestamp:t},
//где x-имя клиента, а t–штамп времени.


//отправляет клиенту
//{server: n , timestamp:t}, 
//где n –номер сообщения, x-имя клиента, а t–штамп времени. 

let http=require('http');
let fs=require('fs');
const WebSocket=require('ws');
const wsserver=new WebSocket.Server({ port:4000, host:'localhost', path:'/wsserver'});
let s=0;
wsserver.on('connection', (ws)=>{
let k=0;
ws.on('message',message=>{
    console.log('on message: ',JSON.parse(message));
    k=JSON.parse(message).x;
    ws.send(JSON.stringify({server:++s,client: k,timestamp:new Date().toISOString()}));
    });
});