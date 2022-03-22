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

async function searchMovies(){
    var urls=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e01cb6bcec8a3835a9b58765a46588f1`
    try {
        let input=document.getElementById("submit").value;

     let res = await fetch(urls);
     let data =await res.json();
     var moviesdatas=data.results
     console.log(moviesdatas)
         display1(moviesdatas)

    } catch(error){
        console.log("error:",error);
    }
 }
 searchMovies()
let a=`https://image.tmdb.org/t/p/w500`

 function display1(datas){
    datas.map(function (elem ,index){
      let div=document.createElement("div")
      let img=document.createElement("img")
       img.src=`${a}${elem.poster_path}`
       let h3=document.createElement("h3") 
        h3.innerText= "Title:"+"  "+elem.original_title
        h3.style.color="white"
       let p=document.createElement("p")
       p.innerText="Imbd_reating:"+"  "+elem.vote_average
       div.append(img,h3,p)
       document.getElementById("append").append(div)

    })
}