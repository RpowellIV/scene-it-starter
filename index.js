$(()=> {
    console.log("Ready")

    function renderMovies(movieArray) {
        console.log("I'm here")
        // console.log(movieArray)

        finalHtml = movieArray.map( movie => {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top"id="image" src="${movie.Poster}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="title">${movie.Title}</h5>
              <p class="card-text" id="release-date">${movie.Year}</p>
              <a href="#" onclick="saveToWatchlist('${movie.imdbID}')"class="btn btn-primary" id="imdb">ADD</a>
            </div>`
        });
        $('.results').html(finalHtml.join(' '))
    }

      
      
    $('form').on("submit", function(e){
      e.preventDefault(); 
      let searchString = $('.search-bar').val();
      urlEncodedSearchString = encodeURIComponent(searchString);
      console.log(urlEncodedSearchString);

        let newMovie = fetch(`http://www.omdbapi.com/?apikey=8534d2a7&s=${urlEncodedSearchString}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            renderMovies(data.Search);
          });
        console.log(newMovie);
     
      

      });


  });


  function saveToWatchlist(imdbID) {
    console.log(imdbID);

    var movie = movieData.find(function(currentMovie){
      return currentMovie.imdbID === imdbID;
    });

    var watchlistJSON = localStorage.getItem('watchlist');
    console.log(watchlistJSON);
    var watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist);

    if (watchlist === null) {
      watchlist = [];
    }
    
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
};


      // movieHTML = renderMovies(movieData)
      // let movieFind = $(".search-bar").val();
      // console.log(`This is ${movieFind}`);   
      // movieData.forEach(function(item, index){
      //   if(item.movieFind === movieFind) {
      //     console.log(item.movieFind);
      //     var choice = renderMovies(movieData);
      //     console.log(choice);
      //   };
    
      // });