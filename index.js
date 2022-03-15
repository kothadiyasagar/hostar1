   var timerid;
    let movies=document.getElementById("movies");
    movies.style.display="none"
  
    async function searchMovie(){
        movies.style.display="block"
        var url='https://api.themoviedb.org/3/search/movie?api_key=e01cb6bcec8a3835a9b58765a46588f1&query="'
        try {
            let input=document.getElementById("submit").value;
 
         let res = await fetch(url+input);
         let data =await res.json();
         var moviesdata=data.results
         console.log(moviesdata)
        //   display(moviesdata)
        return moviesdata
         console.log("data:",data);
 
        } catch(error){
            console.log("error:",error);
        }
     }
 function display(data){
      movies.innerHTML=null
      
     data.map(function(elem,index){
         let div=document.createElement("div");
         let p=document.createElement("p")
         p.innerText=elem.original_title
         div.append(p)
         movies.append(div)
     })

 }
 async function main(){
     try {
      var data= await searchMovie()
      if(data=== undefined){
        return false;
    }
    display(data) 
  } catch(error){
      console.log("error:",error);
  }
}
function deboounce(func,delay){
    if(timerid){
        clearTimeout(timerid)
    }
   timerid= setTimeout(function(){
        func()// still the main()  function
    },delay)
}