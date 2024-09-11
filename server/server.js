//require express - gives us a function
const express = require('express')

//createing an instance of express by calling
// the function returned above - which is an object
const app = express();
const port = 5001

//express static file serving - public is the folder name
app.use(express.static('server/public'))

//starts our server
app.listen(port, () => {
    console.log('listening on port', port);
})
console.log("is server running?");

// 1. npm start - starting the server loading server.js
//2. go to localhost:5001(port number- set up a location- the connection to out server)
//3. app.use(express.static('server/public'));- every time this url is entered it makes a call to the server the server will giver or sever information
//4. call server sends photo to browser
//5. browser reads/compiles folder and displays
// refreshing the page makes a call to the server and asks for the server public folder to display on browser

// CURD - CREATE READ UPDATE DELETE

//when we visit http://;localhost:5001/url

// let quoteList = [
//     { text: 'That\'s one small step for a man, a giant leap for mankind.', author: 'Neil Armstrong' },
//     { text: 'The more you read, the better you\'re going to become as a storyteller.', author: 'Stan Lee' },
//     { text: 'May the force be with you', author: 'Everyone in star wars at some point' }
// ];

let quoteList = require('./modules/quoteList')
// when we visit http://localhost:5001/quotes
//in our browser, express will call this function
app.get('/quotes', function(req,res) {
    console.log('Request for /quotes was made');
    //send back the item in res.send()
    //so we can use it in our browser
    res.send(quoteList)
    //res.status(400).send('that request was not valid');
})

// all of these are the same: Route = Path = URL above code 
//- app.get('/quotes', function(req,res) {
    // ^ is a method   
//- app.get('/quotes', function(req,res) { = method, app is an extension of express
                                //^ req (static object) is an object with information about the request
//- app.get('/quotes', function(req,res) {
                            //       ^
   //                      whatever we pass to `res.send()` is the response Body

   //***Status codes***
   // 200 = ok: everything about this request worked
   // 201 = Created: the server created some new data for you
   // 400 = Bad request: he client sent some bad data
   // 404 Not Found: That URL or endpoint is not available
   // 500 Server Error: something bad happened on the server 

   //by default res.send() uses a 200
   

   //API "Application Programming Interface"
    // a way for programs to communicate with each other In out case we are talking about a web server that can send data back and forth to a client

    //HTTP
    //HTTP is the specification that describes everything er just talked about. So the fact tat a request is made of a route and method, this is all described i HTTP specification 
    //wraps up the concept of making request- HTTP request