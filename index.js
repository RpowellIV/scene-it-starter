<<<<<<< HEAD
// console.log(movieData);

// $(document).ready( ()=> {
//     function renderMovies(movieArray) {
//         movieHTML = movieArray.map(movie => {
//             // console.log(movie);
//             console.log(movie.Title);
//             console.log(movie.Year);
//             $('#image').html(movie.Poster)
//         });
//     };
//     renderMovies(movieData);
//     // $('#search').click((renderMovies) => {
    
//     // console.log(movieHTML.join(''));
//     console.log('Testing...');
// });

=======
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
        });

        $('.results').html(movieHtml.join(' '))
    }
    renderMovie(movieData);

});

    function getMovie() {
        var movieFind = document.getElementById("search").value;

        console.log(movieFind);
    
        movieData.forEach(function(item, index){
          if(item.movieFind == movieFind) {

            renderMovie(movieData);
            // var displayData = "<li><b>User Name</b>: "+ item.username +"</li>"+
            //       "<li><b>EMail</b>: "+ item.email +"</li>"+
            //       "<li><b>Status</b>: "+ item.status +"</li>"+
            //       "<li><b>ID</b>: "+ item.id +"</li>";     
            // $("#display").html(displayData);
          };
        });
    };
>>>>>>> cb9845dcd6fd400e9092a171632983b703eec35d

