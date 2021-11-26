const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code here
    if(operation=="add" && movie!=null){
        movies.push(movie);
        // return k;
    }
    if (operation=="remove"){
        movies.pop();
        // return k;
    }
    return movies;
}

module.exports = favouriteMovie;
