const redis=require('redis');
const client=redis.createClient('//redis-10496.c9.us-east-1-2.ec2.cloud.redislabs.com:10496',
                                {password:'C8wuAUl2nB7zRpheqVGJnf2Eeye0t97I'});
client.on('ready',()=>{console.log('ready')});
client.on('error',(err)=>{console.log('error '+err)});
client.on('connect',()=>{console.log('connect')});
client.on('end',()=>{console.log('end')});
client.set('incr',0);
var incrnow;
client.incr('incr',()=>{incrnow =new Date();})
for (let n = 1; n < 9999; n++) { 
    client.incr('incr');
}
client.incr('incr',()=>{console.log('Time incr: '+(new Date()-incrnow));})
var decrnow;
client.decr('incr',()=>{decrnow =new Date();})
for (let n = 1; n < 9999; n++) { 
    client.decr('incr');
}
client.decr('incr',()=>{console.log('Time decr: '+(new Date()-decrnow));})
client.del('incr');
client.quit();