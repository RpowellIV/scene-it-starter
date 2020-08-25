$(document).ready( ()=> {
    console.log("Ready")

    function renderMovie(movieArray) {
        console.log("I'm here")
        // console.log(movieArray)

        movieHtml = movieArray.map( movie => {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top"id="image" src="${movie.Poster}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="title">${movie.Title}</h5>
              <p class="card-text" id="release-date">${movie.Year}</p>
              <a href="#" class="btn btn-primary">ADD</a>
            </div>`
        } )

        $('.results').html(movieHtml.join(' '))
    }

    renderMovie(movieData)

});