const express =  require('express');

const app = express();

app.use("/test" , (req, res)=>{
    res.send("Hello from the test route !!!");
});
app.use("/hello" , (req, res)=>{
    res.send("Hello from the Hello route !!!");
});
app.use("/" , (req, res)=>{
    res.send("Hello from the Dashboard server !!!");
});
app.listen(3000, ()=>{
    console.log("server is successfully listening on port 3000...")
});