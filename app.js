const http = new easyHTTP();

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err,response) {
    if(err){
        console.log(err)
    } else {
        console.log(response)
    }
    
});


//GET  Single Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
    if(err){
        console.log(err)
    } else {
        console.log(post)
    }
    
});

//  Create Data 

const data = {
    title: 'Custom Post',
    body: 'This is custom post'
};

//Create POST
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post)
    }
})

//Update Post 

http.put('https://jsonplaceholder.typicode.com/posts/6', data, function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post)
    }
})


//DELETE post 
http.delete('https://jsonplaceholder.typicode.com/posts/6',  function(err, res){
    if(err){
        console.log(err)
    } else {
        console.log(res)
    }
})