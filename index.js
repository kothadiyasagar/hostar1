     
    let movies=document.getElementById("movies");
    movies.style.display="none"
    async function searchMovie(){
        movies.style.display="block"
        var url='https://api.themoviedb.org/3/search/movie?api_key=e01cb6bcec8a3835a9b58765a46588f1&query="'
        try {
         let input=document.getElementById("submit").value;
 
         let res = await fetch(url+input);
         let data =await res.json();
        //  appendmovies(data.Search)
         console.log("data:",data);
 
        } catch(error){
            console.log("error:",error);
        }
     }