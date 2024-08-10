const express = require('express');
const redis = require('redis');

const app = express();

// we need to specify host for the client
//location of the redis server
const client = redis.createClient({
    //usually we put the entire address http:// .. 
    //but since we are using docker, we do not have to specify the entire thing
    host: 'redis-server',
    port: 6379
    //this will automatically redirect to the other container which is redis-server
});
//This will set initial visit a 0 

client.set('visits', 0);

app.get('/', (request,respose)=>{
    client.get('visits', (err, visit)=>{
        respose.send("Number of visits => " + visit);
        //we are showing the visits to application and then we are incrementing
        //the visit count into the database
        client.set('visits', (Number(visit)+1));
    });
});

app.listen(8081, ()=>{
    console.log("Listening in port 8081");
})