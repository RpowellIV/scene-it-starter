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
  
// $(function(){

// 	function renderMovies(movieArray) {

// 		var finalHTML = "";

// 		movieArray.forEach(function(currentMovie){

// 			finalHTML += '<div class="card" style="width: 20rem;">';
// 			finalHTML += '<img class="card-img-top" src="'+ currentMovie.Poster +'"/>';
// 			finalHTML += '<div class="card-body">';
// 			finalHTML += '<h4 class="card-title">'+ currentMovie.Title;
// 			finalHTML += '<span class="badge badge-secondary float-right">'+ currentMovie.Year +'</span>';
// 			finalHTML += '</h4>';
// 			finalHTML += '<a href="#" class="btn btn-primary addButton">Add!</a>';
// 			finalHTML += '</div>';
// 			finalHTML += '</div>';
// 		});

// 		return finalHTML;
// 	}

// 	$('form').submit(function(e){
// 		e.preventDefault();
// 		var movieHTML = renderMovies(movieData);
// 		$('.movies-container').html(movieHTML);
// 	});



// })

$(()=> {
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
    // renderMovie(movieData);

});


$('form').submit(function(e){
  e.preventDefault();
  var movieHTML = renderMovies(movieData);
  $('.movies-container').html(movieHTML);
});

    // function getMovie() {
    //     var movieFind = document.getElementById("search").value;

    //     console.log(movieFind);
    
    //     movieData.forEach(function(item, index){
    //       if(item.movieFind == movieFind) {

    //         renderMovie(movieData);
            // var displayData = "<li><b>User Name</b>: "+ item.username +"</li>"+
            //       "<li><b>EMail</b>: "+ item.email +"</li>"+
            //       "<li><b>Status</b>: "+ item.status +"</li>"+
            //       "<li><b>ID</b>: "+ item.id +"</li>";     
            // $("#display").html(displayData);
    //       };
    //     });
    // };

