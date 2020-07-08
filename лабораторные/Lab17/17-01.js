const redis=require('redis');
const client=redis.createClient('//redis-10496.c9.us-east-1-2.ec2.cloud.redislabs.com:10496',
                                {password:'C8wuAUl2nB7zRpheqVGJnf2Eeye0t97I'});
client.on('ready',()=>{console.log('ready')});
client.on('error',(err)=>{console.log('error '+err)});
client.on('connect',()=>{console.log('connect')});
client.on('end',()=>{console.log('end')});
client.quit();