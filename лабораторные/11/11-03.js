//WS-сервер всем подключившимся клиентам каждые 15 сек посыл.сообщ
//11-03-server: n(номер отправляемого сообщения)
//с помощью ping/pong-механизма провер.работоспос.соед каждые 5 сек
//выводим на консолько кол-во работоспособных соединений
let fs=require('fs');
let n=0;
let count=0;
const WebSocket=require('ws');
const wsserver=new WebSocket.Server({ port:4000, host:'localhost', path:'/wsserver'});
function heartbeat() {
    this.isAlive = true;
  }
wsserver.on('connection', (ws)=>{
    ws.isAlive = true;
    ws.on('pong',heartbeat);
});
wsserver.on('error',(e)=>{console.log('ws server error',e);});
console.log(`ws server: host:${wsserver.options.host}, port: ${wsserver.options.port}, path:${wsserver.options.path}`);

const interval = setInterval(function ping() {
    count=0;
    wsserver.clients.forEach(function each(ws) {
        if (ws.isAlive === false) 
          return ws.terminate();
        else       
        count++;
        ws.isAlive = false;
        ws.ping('123');  }
      );
      console.log('Connections:',count);
  }, 5000);
  
  const interval2 = setInterval(function send() {
    wsserver.clients.forEach(function each(ws) {
        ws.send(`11-03 server: ${n}`);n++;
    });
  }, 15000);