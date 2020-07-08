const redis=require('redis');
const client=redis.createClient('//redis-10496.c9.us-east-1-2.ec2.cloud.redislabs.com:10496',
                                {password:'C8wuAUl2nB7zRpheqVGJnf2Eeye0t97I'});
client.on('ready',()=>{console.log('ready')});
client.on('error',(err)=>{console.log('error '+err)});
client.on('connect',()=>{console.log('connect')});
client.on('end',()=>{console.log('end')});
var now;
client.hset('incr',0,JSON.stringify({id:0,val:'0'}),()=>{now =new Date();});
for (let n = 1; n < 9999; n++) { 
    client.hset('incr', n, JSON.stringify({id:n,val:'val-'+n}));
}
client.hset('incr',9998,JSON.stringify({id:9998,val:'val-9998'}),()=>{console.log('Time hset: '+(new Date()-now));});
var getnow;
client.hget('incr',0,(err,result)=>{
    getnow =new Date();
    console.log(result);
})
for (let n = 1; n < 9999; n++) { 
    client.hget('incr',n);
}
client.hget('incr',9999,()=>{console.log('Time hget: '+(new Date()-getnow));})
var delnow;
client.hdel('incr',0,()=>{delnow =new Date();})
for (let n = 1; n < 9999; n++) { 
    client.hdel('incr',n);
}
client.hdel('incr',9999,()=>{console.log('Time hdel: '+(new Date()-delnow));})
client.quit();