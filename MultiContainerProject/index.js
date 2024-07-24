const expres = require('express');
const redis = require('redis');

const app = express();

// we need to specify host for the client
const client = redis.createClient();
//This will set initial visit a 0 
client.set('visits', 0);

app.get('/', (request,respose)=>{
    client.get('visits', (err, visit)=>{
        respose.send("Number of visits => " + visit);
        //we are showing the visits to application and then we are incrementing
        //the visit count into the database
        client.set('visits', visit+1);
    }).err(()=>{
        console.log("We are getting error in this!!");
    })
});

app.listen(8081, ()=>{
    console.log("Listening in port 8081");
})