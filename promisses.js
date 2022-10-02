const posts=[{title:'post one',body:'This is post one',createdAt:new Date().getTime()},
             {title:'post two',body:'This is post two',createdAt:new Date().getTime()}];

        let intervalId=0;

    function getPosts(){
        clearInterval(intervalId)
        intervalId=setInterval(()=>{
            let output='';
            posts.forEach((post,index)=>{
            output+=`<li>${post.title} -created ${(new Date().getTime()-post.createdAt)/1000} seconds ago</li>`;
                });
            document.body.innerHTML=output;
            },1000)
          
        
    }  
    
    function createPost(post){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                posts.push({...post,createdAt:new Date().getTime()});
               const error=false;
               if(!error){
                resolve();
               }else{
                reject('Error:something Went wrong');
               }
              },0);
        });
        
    }
    //createPost({title:'post three',body:'this is post three'}).then(getPosts);
    //createPost({title:'post four',body:'this is post four'}).then(getPosts);
    

    function deletePost(){
           return setInterval(()=>{
                posts.pop();
              },2000);  
    
            }
   //const promise1=Promise.resolve('hello world');
   //const promise2=10;
   //const Promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'goodbye'));

   //Promise.all([promise1,promise2,Promise3]).then(values=>console.log(values));
    const user={
        username:'kapil',
        lastactivitytime:'1st oct' 
    }
    
    updatelastActivitytime={
    return: new Promise((resolve,reject) =>{
        setTimeout(() => {
        user.lastactivitytime= new Date().getTime();
        
        const error=false;
               if(!error){
                resolve(user.lastactivitytime)
               }else{
                reject('Error:something Went wrong');
               }
        },1000)
    })
   }
 function userupdatespost(){
Promise.all([createPost,updatelastActivitytime]).then(([createPostresolves,updatelastActivitytimeresolves])=>{
console.log(updatelastActivitytimeresolves)
})
.catch(err=>console.log(err))
}

userupdatespost()