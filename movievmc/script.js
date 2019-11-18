var title = document.querySelector("#title").value;
var length = document.querySelector("#length").value;
var genre = document.querySelector("#genre").value;
var error = document.querySelector("#error");
var button = document.querySelector("#button");
var output = document.querySelector("#output");
var totalLength = document.querySelector("#totalLength");

var dataModule = (function () {

    /* class Movie {
        constructor(movied) {
            this.title = movied.title;
            this.length = movied.length;
            this.genre = movied.genre;
        }
        getInfo() {
            return `${this.title}, ${this.length}, ${this.genre}`
        }
    }

    var data = {
        movies: []
        // programs: []
    }

    function addMovie(movie) {
        var addMovie = new Movie(movie)
        data.movies.push(movie);
        return data;
    } */

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getInfo() {
            return `Title: ${this.title} | Duration: ${this.length} | Genre: ${this.genre} `;
        }
    }

    var movie = new Movie(title, length, genre);


    data = [];
    function addMovie(movie) {
        data.push(movie);
        return data;
    }

    function calculateTotalLength(movies) {
        var total = 0;
        for (var i = 0; i < movies.length; i++) {
            total += parseInt(data.movies[i].length);
        }
        return total;
    }

    function getTotalLength() {
        return calculateTotalLength;
    }

    return {
        data: data,
        addMovie: addMovie,
        getTotalLength: getTotalLength
    }
})();






var uiModule = (function () {


    function validateForm() {

        var getInput = {
            title: title,
            length: length,
            genre: genre
        }

        if (!getInput.title) {
            displayError("Please insert title");
            return;
        }
        if (!getInput.length) {
            displayError("Please insert length");
            return;
        }
        if (getInput.genre === "select") {
            displayError("Please chose a genre");
            return;
        }

        return getInput;
    }

    function displayMovies(movies) {
        for (var i = 0; i < movies.length; i++) {
            var item = document.createElement("li");
            item.textContent = movies[i].getInfo();
        }
        output.append(item);

        function clearValues() {
            title = "";
            length = "";
            genre = "select"
        }
    }

    function displayTotalLength(total) {
        totalLength.textContent = "Total length: " + total + " min";
    }

    function displayError(msg) {
        error.textContent = msg;
    }
    return {
        displayMovies: displayMovies,
        displayError: displayError,
        displayTotalLength: displayTotalLength,
        validateForm: validateForm
    }

})();


var ctrlModule = (function (data, ui) {

    button.addEventListener("click", addMovieOnClick);

    function addMovieOnClick() {
        var movieData = ui.validateForm();


        if (movieData === "undefined") {
            return;
        }
        data.addMovie(movieData);
        ui.displayTotalLength(data.getTotalLength());
        ui.displayMovies(data.data.movies);


    }

})(dataModule, uiModule);