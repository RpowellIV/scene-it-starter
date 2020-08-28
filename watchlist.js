$(()=> {
    console.log("Ready")

    var watchlistInfo = localStorage.getItem('watchlist');

    function renderWatchlist(movieArray2) {
        console.log("I'm here")
        // console.log(movieArray)
        console.log(movieArray2);
        movieArray2 = JSON.parse(movieArray2);
        finalHtml2 = movieArray2.map( newmovie => {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top"id="image" src="${newmovie.Poster}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="title">${newmovie.Title}</h5>
              <p class="card-text" id="release-date">${newmovie.Year}</p>
              <a href="#" onclick="saveToWatchlist(${newmovie.imdbID})"class="btn btn-primary" id="imdb">ADD</a>
            </div>`
        });
        $('.results2').html(finalHtml2.join(' '))
    }

      renderWatchlist(watchlistInfo);

  });
