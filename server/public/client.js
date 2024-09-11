console.log("Server Serving");
console.log("Server Serving");

//Axios (HTTP Request)- library that allows us to communicate between the client and the server through Java Script
    //on the client side, sourcing in for use like express

    //sources in index.html with = <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    //axios allows us to call routes from the client side. i.e. /quotes from the server and bring into our page

    function getQuotes(){
        // Get quotes from server with Axios
        axios({
            method:'GET',
            url:'/quotes'
        }).then(function(response) {
            console.log("SUCCESS", response.data);
            console.log('response', response);
            let quotesFromServer = response.data
            renderToDom(quotesFromServer)
            //run function to render list on dom
        }).catch(function(error) {
            alert('Request failed.')
        });
    }
    //Call it
    getQuotes();

    //axios is a function that takes in an object with a method and URL, when it runs that it then runs .then(it is promised something in the function) and then runs a response.Catch runs similar to then where this one takes in an error to alert the user that the request has failed
    