function getItems(id){

    let request = new XMLHttpRequest()
    request.open('GET','https://jsonplaceholder.typicode.com/posts?userId='+id)
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let posts = request.response
            document.getElementById('posts').innerHTML=''
             let post
            for(post of posts){
               let content = `
               <div class="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                </div>`
                document.getElementById('posts').innerHTML+=content
        }   
        }
        else{
            alert("it's okey it just error")
        }
        
    }
}

function getUsers(){

    let request = new XMLHttpRequest()
    request.open('GET','https://jsonplaceholder.typicode.com/users')
    request.responseType = 'json'
    request.send()
    request.onload = function(){
        if(request.status >= 200 && request.status < 300){
            let users = request.response
            document.getElementById('usr').innerHTML=''
             let user
            for(user of users){
               let content = `
               <div id="users" onclick='userClicked(${user.id},this)'>
                    <h3>${user.name}</h3>
                    <h3>${user.email}</h3>
                </div>`
                document.getElementById('usr').innerHTML+=content
        }   
        }
        else{
            alert("it's okey it just error")
        }
        
    }
}


function userClicked(id,el){
    //alert(id)
    getItems(id)
    let determined = document.getElementsByClassName('selected')
    for (one of determined)
        one.classList.remove('selected')
    el.classList.add('selected')
    
}


getUsers()