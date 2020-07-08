//k.op.zapis v zhurnal trans (BD v OP); str-ra d-h (k-z)
const redis=require('redis');
const sub_client=redis.createClient('//redis-10496.c9.us-east-1-2.ec2.cloud.redislabs.com:10496',
                                    {password:'C8wuAUl2nB7zRpheqVGJnf2Eeye0t97I'});
sub_client.on('subscribe',(channel,count)=>{console.log('subscribe:','channel = ',channel,'count = ',count)});
sub_client.on('message',(channel,message)=>{console.log('sub channel: ' + channel + ':' + message)});
sub_client.subscribe('channel-01');
setTimeout(()=>{
sub_client.unsubscribe();
sub_client.quit();
},50000);
const pub_client=redis.createClient('//redis-10496.c9.us-east-1-2.ec2.cloud.redislabs.com:10496',
                                    {password:'C8wuAUl2nB7zRpheqVGJnf2Eeye0t97I'});
pub_client.publish('channel-01','from pub-client message 1');
pub_client.publish('channel-01','from pub-client message 2');
setTimeout(()=>pub_client.publish('channel-01','from pub-client message 3'),10000);
setTimeout(()=>pub_client.publish('channel-01','from pub-client message 4'),20000);
setTimeout(()=>pub_client.publish('channel-01','from pub-client message 5'),30000);
setTimeout(()=>pub_client.publish('channel-01','from pub-client message 6'),40000);
setTimeout(()=>pub_client.quit(),50000);