function getUsers(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{
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
            resolve()
        })

    })
    
}


function getItems(id){
    fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
    .then(response => response.json())
    .then(posts =>{
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
        })
}

function userClicked(id,el){
    //alert(id)
    getItems(id)
    let determined = document.getElementsByClassName('selected')
    for (one of determined)
        one.classList.remove('selected')
    el.classList.add('selected')
    
}   

getUsers().then(()=>{
    getItems(1)
})

    