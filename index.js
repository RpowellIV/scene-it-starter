$(document).ready( ()=> {
    console.log("Ready")

    function renderMovie(movieArray) {
        console.log("I'm here")
        // console.log(movieArray)

        movieHtml = movieArray.map( movie => {
            return `<p>${movie.Title}</p>`
        } )

        $('.results').html(movieHtml.join(' '))
    }

    renderMovie(movieData)

});