const express =  require('express');

const app = express();

// this will only handle get call to /user
app.get('/user',(req, res)=>{
    res.send({firstName : "Simran" , LastName: "Gupta" , age: 25});
});

// this will only handle post call to /user
app.post('/user',(req, res)=>{
    // Saving data to Database 
    res.send("Data Successfully saved to the database");
});

// this will only handle delete call to /user
app.delete('/user',(req, res)=>{
    res.send("Data Successfully deleted from the database");
});



//this will match alll the http method API calls to /test
app.use("/test" , (req, res)=>{
    res.send("Hello from the test route !!!");
});
// app.use("/hello" , (req, res)=>{
//     res.send("Hello from the Hello route !!!");
// });
// app.use("/" , (req, res)=>{
//     res.send("Hello from the Dashboard server !!!");
// });
app.listen(3000, ()=>{
    console.log("server is successfully listening on port 3000...")
});