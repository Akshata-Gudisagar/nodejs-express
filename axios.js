const axios=require('axios');
const moment=require('moment')

//request interceptor
axios.interceptors.request.use((config)=>{
    console.log("Logging ......Authentication");
    // console.log(config);
    console.log(config.method+"request is issued to url"+config.url+"at"+moment(new Date()).format("YYY-MM-DD hh:mm:ss"))
    return config;
},(error)=>{
Promise.reject(error);
});

//Making  a get request
let todoPromise=axios.get("https://jsonplaceholder.typicode.com/todos/1",{timeout:2000});

todoPromise.then((response)=>{

    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);

})
.catch((error)=>{
    // console.error("Error ->"+error);
   if(error.response){
       console.log(error.response.status);
       console.log(error.response.statusText);
   }
   else if(error.request){
     console.log(error.request.status);
   }
   else{
       console.error("Error ->"+error.message);
   }
})
.finally(()=>{
  console.log("Fetch completed")
})


//using async and await

let getTodo=async()=>{
    try{
    let promisedResponse=await axios.get("https://jsonplaceholder.typicode.com/todos/2");
    console.log(promisedResponse.data);
}
catch(error){
    console.log("Error ->"+error);

}
}
getTodo();
axios.post("https://jsonplaceholder.typicode.com/todos",{userId: 1 ,title:"nodeproject",completed:true})
                 .then((response)=>{
                     console.log(response.data);
                 })
                 .catch((error)=>{
                     console.log("Error ->"+error);
                 });

//cancelling request

const CancelToken=axios.CancelToken;
const source=CancelToken.source();

let getTodoCancel=async()=>{
    try{
        let todoResponse=await axios.get("http://jsonplaceholder.typicode.com/todos",{cancelToken:source.token});
        console.log(todoResponse.data);
    }
    catch(error){
        console.error("Error ->"+ error);
    }
}
getTodoCancel();
source.cancel();


//Delete request

// axios.delete("https://jsonplaceholder.typicode.com/todos/2",)
//                  .then((response)=>{
//                     // console.log('Status:${res.status}');
//                      console.log(response.data);
//                      console.log('Message :todo deleted successfully')
//                  })
//                  .catch((error)=>{
//                      console.log("Error ->"+error);
//                  });