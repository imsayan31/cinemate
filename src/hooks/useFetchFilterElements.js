import { useState, useEffect } from "react";

export default function useFetchFilterElements(movies) {
    const [genres, setGenres] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const newGenres = [];
        const newLanguages = [];
        movies.forEach(movie => {
            if (!newGenres.includes(movie.genre)) {
                newGenres.push(movie.genre);
            }
            if (!newLanguages.includes(movie.language)) {
                newLanguages.push(movie.language);
            }
        });
        setGenres(newGenres);
        setLanguages(newLanguages);
    }, [movies]);

    return { genres, languages };
}