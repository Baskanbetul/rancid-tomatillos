
import React from "react";

const fetchMovies = (param) => {

 return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${param}`)
			.then((response) => response.json())
}

export default fetchMovies;
