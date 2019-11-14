class Movie {
  constructor(movieTitle, movieLength, genreType) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.genreType = genreType;
  }
  getData() {
    return this.movieTitle, this.movieLength, this.genreType;
  }
}

var addMovieButton = document.querySelector(".button");
addMovieButton.addEventListener("click", onAddMovieClickHandler);

function onAddMovieClickHandler(event) {
  var movieTitle = document.querySelector(".input-title").value;
  // console.log(movieTitle);
  var movieLength = document.querySelector(".input-length").value;
  // console.log(movieLength);
  var genreType = document.querySelector(".input-select").value;
  // console.log(genreType);

  var movie = new Movie(movieTitle, movieLength, genreType);

  console.log(movie.getData());

  document.querySelector(".form-output").textContent = movie.movieTitle;
}
