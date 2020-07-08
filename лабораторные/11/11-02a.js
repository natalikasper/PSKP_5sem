let http=require('http');
let fs=require('fs');
const WebSocket=require('ws');
const ws=new WebSocket('ws://localhost:4000/wsserver');
let k=0;
ws.on('open',()=>
{
    const duplex=WebSocket.createWebSocketStream(ws,{encoding:'utf-8'});
    let wfile=fs.createWriteStream(`./File${++k}.txt`);
    duplex.pipe(wfile);
})