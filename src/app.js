const express =  require('express');

const app = express();


// 5th Lecture 

// when we do not send anything back
app.get('/noResponse',(req, res)=>{
    // Route Handler 
    // res.send("Route Handler ")
    console.log('this will just hanging aroud on server ')
});

// multiple route handler 
app.get('/multipleroute',(req, res)=>{
    // only this response will be sent and execution will not move further
    res.send("Response !!")  // if this line is commented then nothing will happen server will hang and stuck
} , (req, res) =>{
    // Route Handler 2
    res.send("Response 2!!")
});

// to handle above condition we use next() , next parameter
app.get('/multipleroutehandler',(req, res, next)=>{
    // res.send("Response !!")  // if this line is commented then 
    next()
} , (req, res) =>{
    // Route Handler 2
    res.send("Response 2!!") // output will be this 
});

app.get('/multipleroutehandlerwithError',(req, res, next)=>{
    console.log("Handling the Route user 1") // printed on console
    // next()                   ==> output will be second Response 2 but error will be also there as 
                                // second handler will be called fist adn then below line will be executed 
    res.send("Response !!")  // output will be this res sent to server 
    next() 
} , (req, res) =>{
    // Route Handler 2
    console.log("Handling the Route user 2") // printed on console
    res.send("Response 2!!")   // we will get error also as res is already sent , so  error will be "Cannot set headers after they are sent to the client"
});

// right way to use multiple route handler 
app.get('/multipleroutehandlerwithError',(req, res, next)=>{
    console.log("Handling the Route user 1") 
    // res.send("Response !!")  
    next() 
} , (req, res , next) =>{
    console.log("Handling the Route user 2") // printed on console
    // res.send("Response 2!!")   
      next() 
}, (req, res , next) =>{
    console.log("Handling the Route user 3") // printed on console
    // res.send("Response 3!!")   
      next() 
}, (req, res , next) =>{
    console.log("Handling the Route user 4") // printed on console
    res.send("Response 4!!")    
    // next()        // error because express will be expecting another route handler here
});









// 4th Lecture 

// this will only handle get call to /user , /user/xzy , 
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


// 3rd Lecture 
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