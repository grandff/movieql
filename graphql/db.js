let movies = [
    {
        id : 1,
        name : "Avengers",
        score : 8
    },
    {
        id : 2,
        name : "The Godfather",
        score : 99        
    },
    {
        id : 3,
        name : "Cat",
        score : 2        
    },
    {
        id : 4,
        name : "Logan",
        score : 13
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredPeole = movies.filter(movie => movie.id === id);
    return filteredPeole[0];
}

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanMovies.length){
        movie = cleanMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : `${movies.length + 1}`,
        name,
        score
    };

    movies.push(newMovie);
    return newMovie;
}