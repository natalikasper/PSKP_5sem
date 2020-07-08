let http=require('http');
let fs=require('fs');
const WebSocket=require('ws');
const ws=new WebSocket('ws://localhost:4000/wsserver');
let parm2=process.argv[2];
ws.on('open',()=>
{
    ws.on('message',data=>{
        console.log('on message:',JSON.parse(data));
    });
    setInterval(()=>{
        ws.send(JSON.stringify({client: parm2, timestamp: new Date().toISOString()}));
    },10000);
})